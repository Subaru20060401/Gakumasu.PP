// 自動生成: seesaa wiki 個別ページ「サポートアビリティ」表より抽出（凸0〜4）。
// flats[].trigger: lesson_normal/lesson_sp(tstat=属性 or any)/odekake/shikyu/sodan/shido/
//   jugyo/rest/exam/drink/pitem/skill_ssr/skill/enhance/delete/change/customize/init/other
// flats[].cap=「(N回)」上限(無ければnull)。lessonSupport=得意率(現行モデルでは未使用), eventUp=イベント上昇%。
// rewardPItem/rewardSkill=「サポートイベント」欄でこのカードが渡す固有Pアイテム/スキルカード（111枚/45枚、R13枚は無し）。
// 取得日: 2026-06-29、rewardPItem/rewardSkillのみ2026-07-02追加取得。
import type { SupportCard } from "../types";

export const SUPPORT_CARDS: SupportCard[] = [
 {
  "id": "ssr-000",
  "name": "おでん、通りま〜すッ！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/4904a3033de08738-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     6.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     28.0,
     28.0,
     38.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "あつあつはふはふ",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-001",
  "name": "どーなっちゃうの〜？",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/57f175304db69632-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "shido",
    "cap": 3,
    "values": [
     18.0,
     18.0,
     25.0,
     25.0,
     25.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     28.0,
     28.0,
     38.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "恋心のゆくえ",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-002",
  "name": "私を楽しませろ",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/72a60027a1a42ab7-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     28.0,
     38.0,
     38.0
    ]
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     9.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "お手並み拝見",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-003",
  "name": "私たちも成長していくぞ！",
  "rarity": "ssr",
  "type": "as",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/fe25f5ffa30a755f-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": null,
  "spRates": [
   {
    "stat": "all",
    "values": [
     22.5,
     24.0,
     25.0,
     26.5,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     38.0,
     38.0,
     38.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "sodan",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     28.0,
     38.0,
     38.0
    ]
   },
   {
    "stat": "da",
    "trigger": "odekake",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     28.0,
     28.0,
     38.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "夢の手助け",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-004",
  "name": "……騒々しいお祭りね",
  "rarity": "ssr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/ceb5e35b08bfc458-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "exam",
    "cap": 2,
    "values": [
     17.0,
     17.0,
     22.0,
     22.0,
     22.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": 2,
    "values": [
     28.0,
     28.0,
     28.0,
     38.0,
     38.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     13.0,
     17.0
    ],
    "tstat": "vi"
   }
  ],
  "rewardPItem": {
   "name": "想定外のチケット",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-005",
  "name": "あなたとふたり、電車で",
  "rarity": "ssr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/174e251f32518875-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     15.0,
     15.0,
     15.0,
     21.0,
     21.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vo",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     6.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ガタゴトすやすや",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-006",
  "name": "上かッ！！",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/414821442f8cf81a-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     15.0,
     15.0,
     21.0,
     21.0,
     21.0
    ],
    "tstat": "any"
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     6.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "頭上に注意！",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-007",
  "name": "長旅おつかれさま！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/6e91f85e050b4576-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     15.0,
     15.0,
     0,
     15.0,
     21.0
    ],
    "tstat": "any"
   }
  ],
  "rewardPItem": {
   "name": "夢を叶えるために",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-008",
  "name": "進化したお弁当、気になる",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/4522e64653053579-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     17.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     11.0,
     11.0,
     11.0,
     15.0,
     15.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "咲季の完全食・改",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-009",
  "name": "あたしの勝ち、ですね〜！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/a0adab653d82e1b4-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     17.0,
     17.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     6.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "せーのでぱくっ！",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-010",
  "name": "合格おめでとう！",
  "rarity": "ssr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/ab71abd2bd7ec989-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "花海メモリアル",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-011",
  "name": "かかってらっしゃい！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/549958b58d686bdb-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     15.0,
     15.0,
     21.0,
     21.0,
     21.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "お姉ちゃん、参戦！",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-012",
  "name": "思い出の宝箱だ、ね",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/60b56a1f58e5ba41-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     17.0,
     17.0,
     17.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "exam",
    "cap": 2,
    "values": [
     17.0,
     17.0,
     17.0,
     22.0,
     22.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ふれんどめもりーず",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-013",
  "name": "手毬のリサイタル、だね",
  "rarity": "ssr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/14a2a310eb6b2f69-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     6.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "寒空リサイタル",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-014",
  "name": "堂々とサボってる！？",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/446293bbe7d8c359-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     6.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "あこがれ不良ムーブ",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-015",
  "name": "自分と向き合う時間だ",
  "rarity": "ssr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/b3a031c25e22ede7-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     4.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     15.0,
     15.0,
     15.0,
     15.0,
     21.0
    ],
    "tstat": "any"
   }
  ],
  "rewardPItem": {
   "name": "無我の境地",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-016",
  "name": "なぜこんなところにッ！？",
  "rarity": "ssr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/12fcdec46698fcd4-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     13.0,
     17.0
    ],
    "tstat": "da"
   }
  ],
  "rewardPItem": {
   "name": "完全制覇でポン",
   "rarity": "SSR",
   "plan": "アノマリー"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "skill",
   "count": 1,
   "cap": 2
  }
 },
 {
  "id": "ssr-017",
  "name": "メリクリ、おねーちゃん♪",
  "rarity": "ssr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/08879e770e0162ab-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     6.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "いたずらサンタさん",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-018",
  "name": "やっと見つけたぞ！",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/d6beb3921c9bf804-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "delete",
    "cap": null,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "寝心地は良好",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-019",
  "name": "レディ・セット、ゴー！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/7d35d4831c9b772b-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     11.0,
     11.0,
     11.0,
     15.0,
     15.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     9.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "奥義、受け流し！",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-020",
  "name": "クールダウンが大切よ！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/4116f5ca903132cc-s.jpg",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "sodan",
    "cap": null,
    "values": [
     14.0,
     14.0,
     18.0,
     18.0,
     18.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ほぐれるひととき",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-021",
  "name": "月村手毬、興味深いわね",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/95bdf3e115740d27-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     17.0,
     17.0,
     17.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "対象、ロックオン",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-022",
  "name": "これは――お城ッ！！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/c8cefcceb82d8afc-s.jpeg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     17.0,
     17.0,
     17.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "change",
    "cap": 6,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お礼のティーセット",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-023",
  "name": "ちょっと詳しいんです！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/38673d89f4967ee4-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     15.0,
     15.0,
     15.0,
     21.0,
     21.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vi",
    "trigger": "change",
    "cap": 6,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "月刊アニメトーク♪",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-024",
  "name": "ｖギャルピーーースッｖ",
  "rarity": "ssr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/fe392ba26ea33fa7-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     17.0,
     17.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "しぼまない思い出",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-025",
  "name": "おっと、危ないよ",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/97f1fc2d3368466c-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     7.0,
     7.0,
     7.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "体力作りの教材？",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-026",
  "name": "おい、来てやったぞ！",
  "rarity": "ssr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/b0240077e6a8d58e-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "drink",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     4.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ピークタイムフラッグ",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-027",
  "name": "いつまでも続けばいいのに",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/3d1927b7be5a46c4-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "drink",
    "cap": null,
    "values": [
     4.0,
     4.0,
     5.0,
     5.0,
     5.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     6.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "夏夜に咲く思い出",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-028",
  "name": "放っておけない気になる子",
  "rarity": "ssr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/fe65b78416f30385-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     8.0,
     8.0,
     11.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "sodan_drink",
    "cap": null,
    "values": [
     8.0,
     8.0,
     8.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "面白くて心配な子",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-029",
  "name": "どんな関係なんですか？",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/3112f7bf02012795-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "手作りサブスク弁当",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-030",
  "name": "いつも頑張ってるね。",
  "rarity": "ssr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/a007a6191da09a6c-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": null,
    "values": [
     8.0,
     8.0,
     11.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "drink",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     4.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "包まれるやさしさ",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-031",
  "name": "推し活なひととき、だね！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/378f2c870928f7d3-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     4.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "change",
    "cap": 6,
    "values": [
     8.0,
     8.0,
     8.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "おとものミミズク",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-032",
  "name": "よくやったな、倉本。",
  "rarity": "ssr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/eaa54284418c80b6-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "drink",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     4.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "居残りの生徒会",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-033",
  "name": "ひとりごとです",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/9b79579766b5f2ac-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "change",
    "cap": 3,
    "values": [
     16.0,
     16.0,
     21.0,
     21.0,
     21.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": 3,
    "values": [
     17.0,
     17.0,
     17.0,
     17.0,
     22.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "思い出カタメコイメ",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-034",
  "name": "利用し合うのが友達！",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/dda5516b2a0d0f72-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     17.0,
     17.0,
     22.0,
     22.0,
     22.0
    ]
   },
   {
    "stat": "da",
    "trigger": "change",
    "cap": 3,
    "values": [
     16.0,
     16.0,
     16.0,
     21.0,
     21.0
    ]
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "パワーをくれるモノ",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-035",
  "name": "相変わらず不器用ね",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/ff29ecbdb431c809-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     4.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     11.0,
     15.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "幼馴染の意地",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-036",
  "name": "相手にとって不足なしよ！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/00d137c4db49c029-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": 3,
    "values": [
     17.0,
     17.0,
     17.0,
     17.0,
     22.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "対戦お願いします！",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-037",
  "name": "ここから始まるんだね！",
  "rarity": "ssr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/mTSmPTTNS1-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "delete",
    "cap": null,
    "values": [
     8.0,
     8.0,
     11.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "夢へのスタートライン",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-038",
  "name": "ひとりで立てますか？",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/l91Zh3FaZ7-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ひとりだちシューズ",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-039",
  "name": "新生活のはじまりだね",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/aLpPKi9x3t-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "体力自慢の本気",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-040",
  "name": "あなたたちのことが好き",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/oSGDURinXT-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     9.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ゆうじょーのきろく",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-041",
  "name": "絶対にお渡ししますわっ！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/4718d20b041b9db6-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     11.0,
     15.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お姉さまビッグラブ",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-042",
  "name": "バレンタイン♡会議中ーっ！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/7c79adfa83e1c884-s.PNG",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": null,
  "spRates": [],
  "flats": [],
  "rewardSkill": {
   "name": "バレンタイン大作戦！",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-043",
  "name": "はいっ、みんなも一緒に♪",
  "rarity": "ssr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/1ed8efd0f3363cfc-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     11.0,
     15.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ぜったいいっぱい！",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-044",
  "name": "これが私達の、3年間",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/768dc39e5b3546ff-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "すごすぎるバトン",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-045",
  "name": "もう一度、最初から！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/743de1c13390d09d-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "練習再開！",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-046",
  "name": "待ちなさーい！",
  "rarity": "ssr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/cc7a44e9a308616d-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "はいぼくせんげん",
   "rarity": "SSR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "ssr-047",
  "name": "あったかいね",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/2a28df7cc377e74a-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "sodan",
    "cap": null,
    "values": [
     14.0,
     14.0,
     14.0,
     14.0,
     18.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ぬくもりふたりぶん",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-048",
  "name": "キラキラして綺麗〜っ！",
  "rarity": "ssr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/2de4ff2c7bc3f666-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "sodan",
    "cap": null,
    "values": [
     14.0,
     14.0,
     18.0,
     18.0,
     18.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     17.0,
     17.0,
     17.0,
     17.0,
     22.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "光の夜",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-049",
  "name": "ぜったい追いついてやる！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/e8dedd2b21ab38e4-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     7.0,
     7.0,
     7.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     13.0,
     17.0
    ],
    "tstat": "vi"
   }
  ],
  "rewardSkill": {
   "name": "紅葉ランニング",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-050",
  "name": "そろそろ焼けたかな？",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/69aac5919c3738a7-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ほかほか焼き芋",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-051",
  "name": "食欲の秋なんです",
  "rarity": "ssr",
  "type": "as",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/6ec72d1567df77c2-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": null,
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     10.5,
     14.0,
     14.0,
     14.0
    ]
   }
  ],
  "flats": [],
  "rewardPItem": {
   "name": "ごちそうさまでした",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-052",
  "name": "会長、準備は万端です",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/1a6a1f8c8de914a2-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     9.0,
     9.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     11.0,
     15.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "会長の完璧な計画",
   "rarity": "SSR",
   "plan": "ロジック"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "skill",
   "count": 1,
   "cap": 4
  }
 },
 {
  "id": "ssr-053",
  "name": "すっかり秋色ですわね！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/7127765a2ad95457-s.jpg",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "つやつやでふさふさ",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-054",
  "name": "似合うんじゃない？",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/7ab00aa3faff64fc-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     11.0,
     15.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "いじっぱりバルーン",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-055",
  "name": "二人ならあっという間だね",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/43ac4331ab4e81f1-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     7.0,
     7.0,
     7.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     4.0,
     4.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     13.0,
     17.0
    ],
    "tstat": "vo"
   }
  ],
  "rewardPItem": {
   "name": "とろけた時間",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-056",
  "name": "新たな挑戦の成功ですわ！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/4506d6845625abb4-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "とうちょーのきろく",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-057",
  "name": "ゆっくりと過ごしましょう",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/aa74572df2317056-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "sodan_drink",
    "cap": null,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "その本、おもしろい？",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-058",
  "name": "あっちも行きたいですわ！",
  "rarity": "ssr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/0zD8copRVB-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ほっこりまんぷく",
   "rarity": "SSR",
   "plan": "センス"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "skill",
   "count": 1,
   "cap": 4
  }
 },
 {
  "id": "ssr-059",
  "name": "夏を満喫するわよ！",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/17uBIkwq8w-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     7.0,
     7.0,
     9.0,
     9.0,
     9.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "873シューター",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-060",
  "name": "花火、やりませんか……？",
  "rarity": "ssr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/2805ae2ab4d137d4-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "sodan",
    "cap": null,
    "values": [
     14.0,
     14.0,
     14.0,
     14.0,
     18.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "交わる感情",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-061",
  "name": "夏を楽しみましょう！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/nqXpbsiBgr-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "sodan_drink",
    "cap": null,
    "values": [
     8.0,
     8.0,
     8.0,
     8.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "オーバーパワーボール",
   "rarity": "SSR",
   "plan": "センス"
  }
 },
 {
  "id": "ssr-062",
  "name": "一時休戦です",
  "rarity": "ssr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/58qQ1zcjsv-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     12.0,
     17.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "はじける水しぶき",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-063",
  "name": "もうっ！　冷たいよ！",
  "rarity": "ssr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/FRoEBPBAve-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     17.0,
     17.0,
     17.0,
     17.0,
     22.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "負けず嫌いの勲章",
   "rarity": "SSR",
   "plan": "ロジック"
  }
 },
 {
  "id": "ssr-064",
  "name": "「ア」じゃなくて「エ」！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/r7WvtQwsmz-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "お泊り猛勉強",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-065",
  "name": "晴れたね",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/fBXnTXjSSg-s.jpg",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "rest",
    "cap": null,
    "values": [
     17.0,
     17.0,
     17.0,
     22.0,
     22.0
    ]
   },
   {
    "stat": "da",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     11.0,
     15.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "虹かけるクロス",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-066",
  "name": "まだ上がりませんように！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/HollziYh5i-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     9.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "みずたまりスキップ",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-067",
  "name": "何やってるんだろう、",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/2u2lN9Y8fu-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "天川ラーメン巡り",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-068",
  "name": "あなたにも作ってあげる！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/YJKX3QBqb2-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "rest",
    "cap": null,
    "values": [
     17.0,
     17.0,
     17.0,
     17.0,
     22.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "得体のしれないモノ",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-069",
  "name": "お姉ちゃんに任せなさい！",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/nm_4H6MWR9-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "満開ペアヘアピン",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-070",
  "name": "ぐぬぬぬぬ…………！",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/u1ofLD26tS-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     12.0,
     12.0,
     12.0,
     17.0,
     17.0
    ]
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "悔しさの象徴",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-071",
  "name": "次の桜の季節には。",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/uQB5S0pDIP-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "花萌ゆ季節",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-072",
  "name": "お疲れ様、千奈ちゃん。",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/8sjOSeVP8c-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "陽だまりの生徒会室",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-073",
  "name": "まるで王子様みたいな",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/_aJvierryy-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "星のリトルプリンス",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-074",
  "name": "おいしい顔、いただき〜！",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/L3e2g0VdpM-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "心のアルバム",
   "rarity": "SSR",
   "type": "アクティブ"
  }
 },
 {
  "id": "ssr-075",
  "name": "可愛いと可愛いで可愛い！",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/CxiDSap7IY-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     21.0,
     21.0,
     28.0,
     28.0,
     28.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     13.0,
     13.0,
     13.0,
     17.0,
     17.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ティーパーティ",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-076",
  "name": "私の目に狂いはない",
  "rarity": "ssr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/9H3zcGTTJj-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     7.0,
     7.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     4.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "仲直りのきっかけ",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-077",
  "name": "また、あんなに無理をして",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/ei1UvY6JrF-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     11.0,
     11.0,
     11.0,
     15.0,
     15.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "曇りをぬぐったタオル",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-078",
  "name": "あら、奇遇ね",
  "rarity": "ssr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/LKzKaOm6Zu-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     7.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "スカウト遮り帽",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-079",
  "name": "まじか。",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/9KyreY4Ejv-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     52.0,
     55.0,
     59.0,
     62.0,
     65.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "sodan",
    "cap": null,
    "values": [
     14.0,
     14.0,
     14.0,
     14.0,
     18.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "光のステージ",
   "rarity": "SSR",
   "type": "メンタル"
  }
 },
 {
  "id": "ssr-080",
  "name": "ほら、一緒に持と♪",
  "rarity": "ssr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/OAlmmAoj1O-s.png",
  "paramBonus": [
   6.5,
   7.0,
   7.5,
   8.0,
   8.5
  ],
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": [
   50.0,
   75.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     6.0,
     6.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "夢にあふれた大荷物",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "ssr-081",
  "name": "きみは、自慢の生徒です",
  "rarity": "ssr",
  "type": "as",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/aeQ67Iplfe-s.png",
  "paramBonus": null,
  "lessonSupport": [
   66.1,
   74.6,
   83.1,
   91.5,
   100.0
  ],
  "eventUp": null,
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     10.5,
     14.0,
     14.0,
     14.0
    ]
   }
  ],
  "flats": [],
  "rewardPItem": {
   "name": "信頼の証",
   "rarity": "SSR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-082",
  "name": "ゆるるんあくび顔",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/2d3cdd5ec075ed58-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": 2,
    "values": [
     13.0,
     26.0,
     26.0,
     26.0,
     26.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "居眠り注意！",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-083",
  "name": "ゆずれないもの",
  "rarity": "sr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/490c3af2fddb1f2a-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": 2,
    "values": [
     13.0,
     13.0,
     13.0,
     26.0,
     26.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "懐かしパーティー論争",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-084",
  "name": "のんびり美味しいひととき",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/5ab11fe8573b3826-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   0,
   50.0,
   0,
   0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     0,
     21.0,
     0,
     0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     0,
     40.0,
     0,
     0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     0,
     8.0,
     0,
     0,
     15.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     0,
     1.0,
     0,
     0,
     2.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "のんびりアフタヌーン",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-085",
  "name": "パクパクもぐもぐ",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/2a812dd9c4bff323-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   0,
   0,
   0,
   100.0
  ],
  "eventUp": [
   50.0,
   0,
   0,
   0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     0,
     0,
     0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     1.0,
     0,
     0,
     0,
     2.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "change",
    "cap": 3,
    "values": [
     8.0,
     0,
     0,
     0,
     16.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     0,
     0,
     0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "もぐもぐ定食",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-086",
  "name": "ひっぱり じゅーなん",
  "rarity": "sr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/b5045bf2d9207c78-s.jpg",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     11.0,
     11.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "切磋琢磨のタオル",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-087",
  "name": "騎士とおてんば姫",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/4e8f0d3a8c9f1fab-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     2.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     8.0,
     8.0,
     8.0,
     15.0,
     15.0
    ],
    "tstat": "any"
   }
  ],
  "rewardPItem": {
   "name": "演技のたしなみ",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-088",
  "name": "お近づきの印☆",
  "rarity": "sr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/34d27adc3310c062-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     13.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ほくほくハンバーガー",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-089",
  "name": "洗濯物のバランスタワー",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/13fb86ac008c5b43-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     1.0,
     2.0,
     2.0,
     2.0,
     2.0
    ]
   },
   {
    "stat": "da",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     6.0,
     11.0
    ]
   },
   {
    "stat": "da",
    "trigger": "change",
    "cap": 3,
    "values": [
     8.0,
     8.0,
     8.0,
     16.0,
     16.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お洗濯の必需品",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-090",
  "name": "一番星と王子様",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/c005670cc01e4e8f-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     13.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "幸せの詰め合わせ",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-091",
  "name": "仲良しの証",
  "rarity": "sr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/97d863025acf8bfb-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     11.0,
     11.0,
     11.0,
     11.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "shido",
    "cap": 3,
    "values": [
     9.0,
     9.0,
     9.0,
     18.0,
     18.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "はじめてのけんか？",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-092",
  "name": "おひさま笑顔、満開ふたつ",
  "rarity": "sr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/e262c5a8662700c2-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "shido",
    "cap": 3,
    "values": [
     9.0,
     18.0,
     18.0,
     18.0,
     18.0
    ]
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     9.0,
     17.0
    ]
   },
   {
    "stat": "da",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "そっくりワンワン",
   "rarity": "SR",
   "plan": "アノマリー"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "skill",
   "count": 1,
   "cap": 2
  }
 },
 {
  "id": "sr-093",
  "name": "ぐつぐつ、いいにおい♪",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/e838f24519625579-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     8.0,
     15.0,
     15.0,
     15.0,
     15.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     6.0,
     11.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "change",
    "cap": 3,
    "values": [
     8.0,
     8.0,
     8.0,
     16.0,
     16.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "味見はいかが",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-094",
  "name": "佑芽ソリレース、疾走！",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/eb08fd17389399f3-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     8.0,
     15.0,
     15.0,
     15.0,
     15.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ゲレンデを駆ける赤",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-095",
  "name": "ピコピコでポーン",
  "rarity": "sr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/c30efab4d273ea1b-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     3.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "たたいてかぶって",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-096",
  "name": "バディ？",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/96646eb5c5d56b51-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     8.0,
     8.0,
     8.0,
     8.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     13.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お直し刺繍セット",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-097",
  "name": "眠れる森の王子様",
  "rarity": "sr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/5abd1fb4a8b38512-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": 4,
    "values": [
     8.0,
     15.0,
     15.0,
     15.0,
     15.0
    ],
    "tstat": "any"
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     4.0,
     8.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shido",
    "cap": 3,
    "values": [
     9.0,
     9.0,
     9.0,
     18.0,
     18.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "おひるねブランケット",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-098",
  "name": "ごきげんような挨拶♪",
  "rarity": "sr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/b6a5b3b39420f65f-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     6.0,
     11.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ごきげんようレッスン",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-099",
  "name": "あったか足ツボマッサージ",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/4de3667ca494f492-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "customize",
    "cap": 6,
    "values": [
     5.0,
     8.0,
     8.0,
     8.0,
     8.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     10.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "激痛のちぽかぽか",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-100",
  "name": "はっぴぃはろうぃ〜〜ん！",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/0bd5b0f2c2df1530-s.jpeg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "びっくり仮装グッズ",
   "rarity": "SR",
   "plan": "センス"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "skill",
   "count": 1,
   "cap": 2
  }
 },
 {
  "id": "sr-101",
  "name": "腹筋で背筋で体幹キープ！",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/3a4ffd8cd7d48d47-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     3.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "pitem",
    "cap": 6,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "メリハリストレッチ",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-102",
  "name": "トゲトゲ注意報",
  "rarity": "sr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/b58fd662b8216612-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill_ssr",
    "cap": null,
    "values": [
     3.0,
     5.0,
     5.0,
     5.0,
     5.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "shido",
    "cap": 3,
    "values": [
     9.0,
     9.0,
     9.0,
     9.0,
     18.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "かごいっぱいの成果",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-103",
  "name": "師弟の修行",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/adce4ac1596f465f-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "change",
    "cap": 6,
    "values": [
     5.0,
     8.0,
     8.0,
     8.0,
     8.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "落ち葉つかみの型",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-104",
  "name": "ちべたなひととき",
  "rarity": "sr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/d9295b9d9c2d949e-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "skill",
    "cap": null,
    "values": [
     1.0,
     2.0,
     2.0,
     2.0,
     2.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ふっかつのアイス",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-105",
  "name": "今日は見学なんです",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/b7b3ad33188ccd9e-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "delete",
    "cap": 3,
    "values": [
     8.0,
     16.0,
     16.0,
     16.0,
     16.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "おさぼりタオル",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-106",
  "name": "スパルタ＆スパイス",
  "rarity": "sr",
  "type": "vo",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/a305f93732c3fc5f-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ビシッバシッ竹刀",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-107",
  "name": "むず×2ふぁっしょんしょー",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/59609fc74d65a27a-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お似合いネクタイ",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-108",
  "name": "ばたんきゅー",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/3e7652cca12b78c7-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": 3,
    "values": [
     8.0,
     8.0,
     8.0,
     16.0,
     16.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "へとへとできゅー",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-109",
  "name": "あん・どぅ・とろわっ！",
  "rarity": "sr",
  "type": "da",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/f39c06c4769a2164-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "のびのびバンド",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-110",
  "name": "主菓子、甘い、薄茶、渋み",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/264b11ca58e295c3-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "おもてなしの気持ち",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-111",
  "name": "2名様、ご案内〜♪",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/f1e686a434f949e4-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     10.0,
     10.0,
     10.0,
     10.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     5.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お残しにんじん",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-112",
  "name": "屈辱の2位",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/cec5629966973718-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     10.0,
     10.0,
     10.0,
     10.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     9.0,
     17.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "噛み締めたタオル",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-113",
  "name": "奥義、三重とび！",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/f2c950a6f9b0a22e-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     4.0,
     6.0,
     6.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     5.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "絆のなわとび",
   "rarity": "SR",
   "plan": "アノマリー"
  }
 },
 {
  "id": "sr-114",
  "name": "ガールズ♡トーク",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/e8ed23ea10ea582c-s.png",
  "paramBonus": null,
  "lessonSupport": null,
  "eventUp": null,
  "spRates": [],
  "flats": [],
  "rewardPItem": {
   "name": "ギャルめいきんぐ！",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-115",
  "name": "虫愛づる王子様",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/RedHLq3QYr-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     3.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     10.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "小さなお客さん",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-116",
  "name": "ピューとシューの二重奏",
  "rarity": "sr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/h3UUX901_q-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     4.0,
     6.0,
     6.0,
     6.0,
     6.0
    ]
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     3.0,
     5.0
    ]
   },
   {
    "stat": "da",
    "trigger": "skill",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "草笛ハーモニー",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-117",
  "name": "まごころを込めて",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/00498013f11e1eb8-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     10.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     5.0,
     5.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ディテールが肝心",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-118",
  "name": "SSCの爆誕",
  "rarity": "sr",
  "type": "vi",
  "plan": "anomaly",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/fc9539e836e3a20e-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     10.0,
     10.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "愛情レインボー",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-119",
  "name": "目指すはテッペン",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/f85b2cbb7a2b4707-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "トレーナーの優しさ",
   "rarity": "SR",
   "plan": "フリー"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "lesson_sp",
   "count": 1,
   "cap": 2,
   "tstat": "da"
  }
 },
 {
  "id": "sr-120",
  "name": "まだまだのばしてー",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/e1250c9ec6d97a8e-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     10.0,
     10.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "体ほぐしローラー",
   "rarity": "SR",
   "plan": "フリー"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "lesson_sp",
   "count": 1,
   "cap": 2,
   "tstat": "vi"
  }
 },
 {
  "id": "sr-121",
  "name": "基礎＞応用",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/51324b1f8e334292-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "skill",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     2.0,
     2.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "うるおいのどケア",
   "rarity": "SR",
   "plan": "フリー"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "lesson_sp",
   "count": 1,
   "cap": 2,
   "tstat": "vo"
  }
 },
 {
  "id": "sr-122",
  "name": "カロリー/2でハッピー×2",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/c1cad125c6bd03de-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     3.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ほっこりはんぶんこ",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-123",
  "name": "きゅる〜んωポーズッ☆",
  "rarity": "sr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/8dedfd2ba3b70ee2-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "カワイイのつくり方",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-124",
  "name": "ディカプルエックスエル！",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/b97a734db454fc2a-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "イケてるセーター",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-125",
  "name": "サンマ、パタパタ",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/774c813fdbf5ac99-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     3.0,
     3.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "旬の味わい",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-126",
  "name": "バズっちゃお！",
  "rarity": "sr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/dd29e8436cf728ac-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     14.0,
     14.0,
     14.0,
     14.0
    ]
   },
   {
    "stat": "da",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     10.0
    ]
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "こうかい……？",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-127",
  "name": "トンボをつかまえて",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/4573759b51ab8f41-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     3.0,
     3.0,
     3.0,
     3.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "小さい秋見つけた",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-128",
  "name": "SSDのひみつ",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/7d96c04b1d3a213c-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ぜったいマル秘レシピ",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-129",
  "name": "興味深い飲み物",
  "rarity": "sr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/bae25953c6e41dba-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     5.0,
     5.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "気になる……",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-130",
  "name": "千奈の恩返し",
  "rarity": "sr",
  "type": "da",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/3c1a7d46888bc8e8-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": null,
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "delete",
    "cap": null,
    "values": [
     4.0,
     8.0,
     8.0,
     8.0,
     8.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お嬢様の恩返し",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-131",
  "name": "ブレイクタイムは珈琲で",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/f583ef0caaa4a040-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "sodan_drink",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "優しさミルクシュガー",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-132",
  "name": "りっぱなすすき！",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/48cfed9dcb602d2d-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     10.0,
     10.0,
     10.0,
     10.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "大きくてつやつや",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-133",
  "name": "キュッと締めて",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/wL6D3XeDtN-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "sodan_drink",
    "cap": null,
    "values": [
     4.0,
     4.0,
     4.0,
     8.0,
     8.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "きっかけの帯",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-134",
  "name": "ふわふわなお面？",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/0VvNzKMAhr-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     10.0,
     10.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ハンターの戦利品",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-135",
  "name": "やさしさ、あったかい",
  "rarity": "sr",
  "type": "vi",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/c3a28b7658a8ad68-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     10.0,
     10.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "切れた鼻緒が結んだ絆",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-136",
  "name": "第五種接近遭遇",
  "rarity": "sr",
  "type": "vo",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/n2vJGg2Z8k-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ウチュウジンデアル",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-137",
  "name": "海、楽しまなきゃ！",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/pLB2fqOP7R-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "rest",
    "cap": null,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "可愛い隠しバスタオル",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-138",
  "name": "かちこちストレッチ",
  "rarity": "sr",
  "type": "vi",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/2YZnIUJr4Y-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "咲季オススメマット",
   "rarity": "SR",
   "plan": "ロジック"
  }
 },
 {
  "id": "sr-139",
  "name": "どりゃぎゃ",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/AKF4pEdwbd-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ダブルボトル",
   "rarity": "SR",
   "plan": "センス"
  }
 },
 {
  "id": "sr-140",
  "name": "パシャっとキメポ",
  "rarity": "sr",
  "type": "da",
  "plan": "sense",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/Tb4yofAdBs-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "rest",
    "cap": null,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "キメ顔で自撮り",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-141",
  "name": "イヤホンはんぶんこ",
  "rarity": "sr",
  "type": "vo",
  "plan": "logic",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/lIP39STTAS-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "rest",
    "cap": null,
    "values": [
     9.0,
     9.0,
     9.0,
     9.0,
     17.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     10.0,
     10.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "なに聴いてるの？",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-142",
  "name": "体当たりのラブコール",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/fP2xElWmnt-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "お姉ちゃんだもの！",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-143",
  "name": "今はあえて、背を向けて",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/cWpl2CQS6Y-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "美鈴からの贈り物",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-144",
  "name": "のらりくらりしっかり",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/RhIN1HWc7g-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "おアツイ視線",
   "rarity": "SR",
   "type": "メンタル"
  }
 },
 {
  "id": "sr-145",
  "name": "愛無き暗記は難しい",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/BvDpyzEIgx-s.png",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     5.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "打倒！墾田永年私財法",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-146",
  "name": "てとりあしとり",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/F7M46hG_w4-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ご指導ご鞭撻",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-147",
  "name": "ほっぺた、ぷに",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/AaVS40gPyB-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     5.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "手作りのご褒美",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-148",
  "name": "魅惑の大腿四頭筋",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/518dfa8e79a4a2fe-s.png",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     6.0,
     6.0,
     6.0,
     11.0,
     11.0
    ]
   }
  ],
  "rewardSkill": {
   "name": "ストレッチ談議",
   "rarity": "SR",
   "type": "アクティブ"
  }
 },
 {
  "id": "sr-149",
  "name": "ふわふわでワクワク",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/pplmHqBqqv-s.jpg",
  "paramBonus": [
   4.4,
   4.9,
   5.4,
   5.9,
   6.4
  ],
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [
   {
    "stat": "all",
    "values": [
     10.5,
     21.0,
     21.0,
     21.0,
     21.0
    ]
   }
  ],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_sp",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "exam",
    "cap": 2,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "ふわふわでもこもこ",
   "rarity": "SR",
   "plan": "フリー"
  },
  "drinkGen": {
   "resource": "drink",
   "trigger": "lesson_sp",
   "count": 2,
   "cap": null,
   "tstat": "da"
  }
 },
 {
  "id": "sr-150",
  "name": "嬉し恥ずかし夢心地",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/BMdE649zcv-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     7.0,
     13.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     3.0,
     3.0,
     3.0,
     5.0,
     5.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "お姉さま大百科",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-151",
  "name": "実食！例のSSD",
  "rarity": "sr",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/9OVOkRmGU_-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "例のSSDの秘密",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-152",
  "name": "マイペース、マイライフ",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/gV8kjCQu2U-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "一緒にお昼寝ポプリ",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-153",
  "name": "思惑とガクガク",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/C1VQGXjzTZ-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     4.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "sodan",
    "cap": null,
    "values": [
     7.0,
     7.0,
     7.0,
     14.0,
     14.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "私が見つけた逸材メモ",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-154",
  "name": "ほっとけないクラスメイト",
  "rarity": "sr",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/Uw1yHUWCwq-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     10.0,
     10.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "朝一の助け舟",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "sr-155",
  "name": "いつか、きっと花開く",
  "rarity": "sr",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/UZvQZF_b14-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   59.2,
   69.4,
   79.6,
   89.8,
   100.0
  ],
  "eventUp": [
   50.0,
   50.0,
   75.0,
   75.0,
   100.0
  ],
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     37.0,
     40.0,
     43.0,
     46.0,
     49.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "enhance",
    "cap": null,
    "values": [
     2.0,
     2.0,
     2.0,
     2.0,
     3.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "rest",
    "cap": null,
    "values": [
     9.0,
     9.0,
     9.0,
     17.0,
     17.0
    ]
   }
  ],
  "rewardPItem": {
   "name": "誓いの花びら",
   "rarity": "SR",
   "plan": "フリー"
  }
 },
 {
  "id": "r-156",
  "name": "謹厳実直",
  "rarity": "r",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/8962ca34d78d92f0-s.png",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shido",
    "cap": 3,
    "values": [
     7.0,
     7.0,
     13.0,
     13.0,
     13.0
    ]
   }
  ]
 },
 {
  "id": "r-157",
  "name": "念入りにストレッチ",
  "rarity": "r",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/sSY_C2hPNC-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     23.0,
     26.0,
     28.0,
     31.0,
     33.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "rest",
    "cap": null,
    "values": [
     6.0,
     6.0,
     11.0,
     11.0,
     11.0
    ]
   }
  ]
 },
 {
  "id": "r-158",
  "name": "全力、その後",
  "rarity": "r",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/lO38hjh4ws-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     23.0,
     26.0,
     28.0,
     31.0,
     33.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "rest",
    "cap": null,
    "values": [
     6.0,
     6.0,
     11.0,
     11.0,
     11.0
    ]
   }
  ]
 },
 {
  "id": "r-159",
  "name": "枝毛をくるり",
  "rarity": "r",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/JCXb88Y6r2-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     23.0,
     26.0,
     28.0,
     31.0,
     33.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "rest",
    "cap": null,
    "values": [
     6.0,
     6.0,
     11.0,
     11.0,
     11.0
    ]
   }
  ]
 },
 {
  "id": "r-160",
  "name": "王子様のひと呼吸",
  "rarity": "r",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/0MPhXv1t2E-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "init",
    "cap": null,
    "values": [
     23.0,
     26.0,
     28.0,
     31.0,
     33.0
    ]
   },
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     9.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "odekake",
    "cap": null,
    "values": [
     4.0,
     4.0,
     7.0,
     7.0,
     7.0
    ]
   }
  ]
 },
 {
  "id": "r-161",
  "name": "ひたむき居残りレッスン",
  "rarity": "r",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/t6Vkzkvzad-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "init",
    "cap": null,
    "values": [
     23.0,
     26.0,
     28.0,
     31.0,
     33.0
    ]
   },
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     9.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     4.0,
     4.0,
     8.0,
     8.0,
     8.0
    ]
   }
  ]
 },
 {
  "id": "r-162",
  "name": "憧れを目指して",
  "rarity": "r",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/cAVXeHNKUV-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "init",
    "cap": null,
    "values": [
     23.0,
     26.0,
     28.0,
     31.0,
     33.0
    ]
   },
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     9.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     4.0,
     4.0,
     8.0,
     8.0,
     8.0
    ]
   }
  ]
 },
 {
  "id": "r-163",
  "name": "スイッチON！",
  "rarity": "r",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/xwR_Sf5puc-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "odekake",
    "cap": null,
    "values": [
     4.0,
     4.0,
     7.0,
     7.0,
     7.0
    ]
   }
  ]
 },
 {
  "id": "r-164",
  "name": "いめーじとれーにんぐ",
  "rarity": "r",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image02.seesaawiki.jp/g/u/gakumasu/CEOi6xfFnU-s.jpg",
  "paramBonus": [
   2.8,
   3.2,
   3.6,
   4.0,
   4.3
  ],
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     2.0,
     2.0,
     3.0,
     3.0,
     3.0
    ]
   }
  ]
 },
 {
  "id": "r-165",
  "name": "完全無欠のプランニング",
  "rarity": "r",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/lcUc8MkXJH-s.jpg",
  "paramBonus": [
   2.8,
   3.2,
   3.6,
   4.0,
   4.3
  ],
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     1.0,
     1.0,
     1.0,
     1.0,
     3.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     2.0,
     2.0,
     3.0,
     3.0,
     3.0
    ]
   }
  ]
 },
 {
  "id": "r-166",
  "name": "わたしのペースで",
  "rarity": "r",
  "type": "vo",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/w7OJ9D6Oy1-s.jpg",
  "paramBonus": [
   2.8,
   3.2,
   3.6,
   4.0,
   4.3
  ],
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vo",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     9.0
    ],
    "tstat": "vo"
   },
   {
    "stat": "vo",
    "trigger": "shikyu",
    "cap": null,
    "values": [
     4.0,
     4.0,
     8.0,
     8.0,
     8.0
    ]
   }
  ]
 },
 {
  "id": "r-167",
  "name": "お姉ちゃん直伝メニュー",
  "rarity": "r",
  "type": "da",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/_NshSSbKrD-s.jpg",
  "paramBonus": [
   2.8,
   3.2,
   3.6,
   4.0,
   4.3
  ],
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "da",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     9.0
    ],
    "tstat": "da"
   },
   {
    "stat": "da",
    "trigger": "jugyo",
    "cap": null,
    "values": [
     2.0,
     2.0,
     3.0,
     3.0,
     3.0
    ]
   }
  ]
 },
 {
  "id": "r-168",
  "name": "頼れる先輩お姉さん",
  "rarity": "r",
  "type": "vi",
  "plan": "free",
  "imageUrl": "https://image01.seesaawiki.jp/g/u/gakumasu/3gBjjCWJ1b-s.jpg",
  "paramBonus": null,
  "lessonSupport": [
   48.7,
   61.5,
   74.4,
   87.2,
   100.0
  ],
  "eventUp": null,
  "spRates": [],
  "flats": [
   {
    "stat": "vi",
    "trigger": "lesson_normal",
    "cap": null,
    "values": [
     5.0,
     5.0,
     5.0,
     5.0,
     9.0
    ],
    "tstat": "vi"
   },
   {
    "stat": "vi",
    "trigger": "odekake",
    "cap": null,
    "values": [
     4.0,
     4.0,
     7.0,
     7.0,
     7.0
    ]
   }
  ]
 }
];
