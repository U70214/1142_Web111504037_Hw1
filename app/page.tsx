export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="mx-auto max-w-5xl px-4 pt-12 pb-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              三冠牝馬自由島
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
              自由島（Triple Crown Mare）
            </h1>
            <p className="max-w-2xl text-pretty text-base text-white/75 md:text-lg">
              這是一頁簡潔、好閱讀的「自由島」介紹網頁。內容以「三冠牝馬」的精神為核心，並預留可替換的
              具體賽事資訊（年份、冠軍名稱、成績等），方便你依作業需求補上正確資料。
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-white/60">稱號</div>
                <div className="text-sm font-semibold">三冠牝馬</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-white/60">定位</div>
                <div className="text-sm font-semibold">經典賽季代表</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-white/60">代表特質</div>
                <div className="text-sm font-semibold">穩定節奏</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-white/60">觀眾印象</div>
                <div className="text-sm font-semibold">末段衝刺力</div>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-transparent px-4 py-3 text-sm text-white/80">
              提示：把這裡的資訊替換成你作業要求的「實際資料」（例如：年份、三場經典賽名稱、總戰績）。
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">生平與風格</h2>
            <p className="mt-3 text-white/75">
              自由島以「牝馬的爆發力」聞名：在賽事節奏的掌握上，既能守住關鍵位置，也能在需要的時候快速提速。
              與其說她追求單一瞬間的速度，更像是用整場比賽的穩定性累積勝算。
            </p>
            <p className="mt-3 text-white/75">
              觀眾常提到她的臨場反應——從起跑到中段的走勢都很到位，末段的衝刺更能維持強度，
              讓關鍵差距能夠在終點前被重新拉開。
            </p>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">亮點速覽</h2>
            <ul className="mt-3 space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                三冠牝馬稱號，代表經典賽季的巔峰表現
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                節奏穩定，能在不同戰術下維持競爭力
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                末段衝刺力強，屢次在關鍵階段形成差距
              </li>
            </ul>
          </aside>
        </div>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">三冠之路（可替換版位）</h2>
          <p className="mt-2 text-white/75">
            以下為「三冠」的介紹框架。你可以把括號中的內容換成你需要的實際賽事名稱與年份。
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-xs text-white/60">第 1 冠</div>
              <div className="mt-1 font-semibold">經典賽事（請填）</div>
              <div className="mt-1 text-sm text-white/75">年份：_____　成績：_____</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-xs text-white/60">第 2 冠</div>
              <div className="mt-1 font-semibold">經典賽事（請填）</div>
              <div className="mt-1 text-sm text-white/75">年份：_____　成績：_____</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-xs text-white/60">第 3 冠</div>
              <div className="mt-1 font-semibold">經典賽事（請填）</div>
              <div className="mt-1 text-sm text-white/75">年份：_____　成績：_____</div>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-amber-500/20 via-white/5 to-transparent p-4 text-sm text-white/80">
            小提醒：如果老師要求「必須包含三場比賽的正確名稱/年份/成績」，把本頁的三個區塊直接替換即可。
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">影響與傳承</h2>
          <p className="mt-3 text-white/75">
            三冠的意義不只是贏得比賽，更是把一整季的狀態、訓練與臨場判斷都做到極致。
            自由島作為三冠牝馬的代表，在後續的同類型賽事中也成為討論與學習的標竿，
            讓更多人看見「穩定」如何轉化成「勝利」。
          </p>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-white/70">
          感謝你的閱讀，希望這頁面能符合作業需求；若你提供自由島的實際資料（年份/三場賽事/成績），我也可以幫你把
          版位內容補成完整介紹。
        </div>
      </footer>
    </main>
  );
}
