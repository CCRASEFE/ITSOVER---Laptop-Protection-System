import { foldDiacritics, buildTokenRegex } from './normalizer.js';

// Cerrojo de concurrencia (Mutex)
let isSyncing = false;

// Semillas criticas Leetspeak
const CRITICAL_LEET_SEEDS = [
  'sexi', 'sexy', 'sex', 'hot', 'porno','mujer', 'woman', 'girl',  'porn', 'chicas', 'onlyfans', 'culo', 'culona', 'nude', 'nudes', 'babe',
  'babes', 'escort', 'bikini', 'erotic'
];

export async function syncKeywordRules(keywordList) {
  // Si ya hay una sincronizacion en curso, descarta la llamada duplicada
  if (isSyncing) return;
  isSyncing = true;

  try {
    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
    const removeRuleIds = existingRules.map(r => r.id);

    if (!keywordList || keywordList.length === 0) {
      if (removeRuleIds.length > 0) {
        await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds });
      }
      console.log('[DNR Engine] Reglas limpiadas.');
      return;
    }

    const newRules = [];
    // Contador lineal estricto: hace matematicamente imposible un ID duplicado
    let ruleIdCounter = 10001;

    // ========================================================
    // MOTOR 1: Nucleo Leetspeak (RegexFilter Atomico)
    // ========================================================
    CRITICAL_LEET_SEEDS.forEach((word) => {
      newRules.push({
        id: ruleIdCounter++,
        priority: 30,
        action: {
          type: 'redirect',
          redirect: { extensionPath: '/ui/blocked.html' }
        },
        condition: {
          regexFilter: buildTokenRegex(word),
          isUrlFilterCaseSensitive: false,
          resourceTypes: ['main_frame']
        }
      });
    });

    // ========================================================
    // MOTOR 2: Diccionario Masivo (urlFilter via Aho-Corasick)
    // ========================================================
    const cleanedKeywords = Array.from(
      new Set(
        keywordList
          .map(k => (typeof k === 'string' ? foldDiacritics(k.trim()) : ''))
          .filter(k => k.length > 0)
      )
    );

    cleanedKeywords.forEach((keyword) => {
      const formattedPattern = `*${keyword.replace(/\s+/g, '*')}*`;

      newRules.push({
        id: ruleIdCounter++,
        priority: 20,
        action: {
          type: 'redirect',
          redirect: { extensionPath: '/ui/blocked.html' }
        },
        condition: {
          urlFilter: formattedPattern,
          isUrlFilterCaseSensitive: false,
          resourceTypes: ['main_frame']
        }
      });
    });

    // Escritura atomica en Chromium
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds,
      addRules: newRules
    });

    console.log(
      `[DNR Engine] OK: Sistema Híbrido cargado. ${newRules.length} reglas registradas con éxito (0 colisiones de ID).`
    );
  } catch (err) {
    console.error('[DNR Engine Error]:', err);
  } finally {
    isSyncing = false;
  }
}