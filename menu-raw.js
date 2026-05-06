// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — 餐廳業者在此編輯
//
//  欄位說明:
//    category  分類代碼:combo / extra / drink / share
//    name      品項中文名稱
//    options   價格選項,字串陣列
//    tags      標記代碼陣列(R/1/2/3/P/B/L/V/V5/H),無標記填 []
//    image     圖片檔名(放在 images/ 資料夾),尚無圖片填 null
//    emoji     無圖片時顯示的替代圖示
//    note      中文備註,不需要時填 ''
// ═══════════════════════════════════════════════════════════════════════════

export const menuRaw = [
  // ── 套餐 ───────────────────────────────────────────────────────────────
  {
    category: 'combo',
    name: '經典烏骨雞塊餐',
    options: ['原味 220', '椒鹽 230'],
    tags: ['R'],
    image: null,
    emoji: '🍗',
    note: '含 4 塊烏骨雞柳、薯條、招牌椒鹽、烏龍茶',
  },
  {
    category: 'combo',
    name: '三塊輕食套餐',
    options: ['180'],
    tags: [],
    image: null,
    emoji: '🍱',
    note: '3 塊烏骨雞柳、薯條、烏龍茶',
  },
  {
    category: 'combo',
    name: '雞迷大份量套餐',
    options: ['320'],
    tags: ['R'],
    image: null,
    emoji: '🍳',
    note: '6 塊烏骨雞柳、薯條、雙醬、32oz 烏龍茶',
  },
  {
    category: 'combo',
    name: '烏骨雞堡套餐',
    options: ['原味 200', '辣味 210'],
    tags: ['1'],
    image: null,
    emoji: '🍔',
    note: '烏骨雞腿堡、薯條、烏龍茶',
  },
  {
    category: 'combo',
    name: '兒童歡樂餐',
    options: ['150'],
    tags: [],
    image: null,
    emoji: '🧒',
    note: '2 塊烏骨雞柳、薯條、果汁,附小玩具',
  },

  // ── 加點 ───────────────────────────────────────────────────────────────
  {
    category: 'extra',
    name: '單塊烏骨雞柳',
    options: ['45'],
    tags: ['R'],
    image: null,
    emoji: '🍗',
    note: '',
  },
  {
    category: 'extra',
    name: '招牌椒鹽風味醬',
    options: ['20'],
    tags: ['1'],
    image: null,
    emoji: '🧂',
    note: '微辣,小份杯裝',
  },
  {
    category: 'extra',
    name: '黃金酥炸薯條',
    options: ['大 80', '小 50'],
    tags: [],
    image: null,
    emoji: '🍟',
    note: '',
  },
  {
    category: 'extra',
    name: '蒜香吐司',
    options: ['40'],
    tags: [],
    image: null,
    emoji: '🥪',
    note: '',
  },
  {
    category: 'extra',
    name: '涼拌高麗菜',
    options: ['40'],
    tags: ['V5'],
    image: null,
    emoji: '🥗',
    note: '含蒜,屬五辛素',
  },

  // ── 飲料 ───────────────────────────────────────────────────────────────
  {
    category: 'drink',
    name: '古早味檸檬紅茶',
    options: ['杯 40', '壺 120'],
    tags: [],
    image: null,
    emoji: '🍋',
    note: '',
  },
  {
    category: 'drink',
    name: '黑糖烏龍',
    options: ['杯 45', '壺 130'],
    tags: ['R'],
    image: null,
    emoji: '🧋',
    note: '',
  },
  {
    category: 'drink',
    name: '古法冬瓜茶',
    options: ['杯 35', '壺 110'],
    tags: [],
    image: null,
    emoji: '🍵',
    note: '',
  },
  {
    category: 'drink',
    name: '鮮榨檸檬汁',
    options: ['60'],
    tags: [],
    image: null,
    emoji: '🍋',
    note: '無糖可選',
  },

  // ── 外帶分享 ───────────────────────────────────────────────────────────
  {
    category: 'share',
    name: '25 塊分享桶',
    options: ['850'],
    tags: ['R'],
    image: null,
    emoji: '🪣',
    note: '附 2 份招牌醬',
  },
  {
    category: 'share',
    name: '50 塊團體桶',
    options: ['1600'],
    tags: [],
    image: null,
    emoji: '🍱',
    note: '附 4 份招牌醬',
  },
  {
    category: 'share',
    name: '100 塊派對桶',
    options: ['時價'],
    tags: [],
    image: null,
    emoji: '🎉',
    note: '需提前 24 小時預訂',
  },
]
