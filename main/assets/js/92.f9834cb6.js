(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{594:function(e,o,t){"use strict";t.r(o);var n=t(1),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cosmos-hub-inflation-variable-modification-blocks-per-year"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-inflation-variable-modification-blocks-per-year"}},[e._v("#")]),e._v(" Cosmos Hub Inflation variable modification: Blocks Per Year")]),e._v(" "),t("p",[t("strong",[e._v("Quick Summary of issue")])]),e._v(" "),t("p",[e._v("There are 6 main variables that control the maximum, minimum, & change of the\natom inflation rate for the cosmos hub. Description of these variables can be\nfound under the "),t("a",{attrs:{href:"https://github.com/cosmos/governance/blob/master/params-change/Mint.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("mint module in the parameters\nwiki"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("In this proposal we will be looking at adjusting the blocks per year parameter.")]),e._v(" "),t("p",[e._v("Currently the variable named “blocks per year” is set at 4,855,015. This works\nout to one block every 6.5 second roughly, which as many Atom holders know, is\nnot a very good approximation. This leads to the stated inflation rate of the\ncosmos hub to not match reality.")]),e._v(" "),t("p",[t("strong",[e._v("How to fix the issues")])]),e._v(" "),t("p",[e._v("The goal is to select a value that is as close as possible to the future block\nthroughput for the cosmos hub. To do that I will look at current (past couple\ndays) and historical time frames to try and get as close of an approximation as\npossible.")]),e._v(" "),t("p",[t("strong",[e._v("Past Blocks per Year Data")])]),e._v(" "),t("p",[e._v("Using Big Dipper, CosmosScan, or any one of the popular cosmos hub explorers,\nthe time stamp for each block can be found. The typical cosmos hub block comes\nin between 7-8 seconds, with the majority being closer to 7. If you look over\nthe past day (written on 10/14/2020) you can see an average block time coming in\naround 7.29 seconds. Looking on an hourly & minute level, 7.25-7.3 seconds per\nblock can be seen fairly consistently. Big Dipper has also conveniently provided\nthe all time (for cosmos hub-3) block time data, which is coming in around 7.18\nsecond. Considering the slight discrepancy, I figured shooting right in the\nmiddle would be an appropriate starting point, which could later be adjusted for\nfiner accuracy if need be. Now to find how many seconds are in a year, which\nequals 365.25 (days / year) X 24 (Hours / Day) x 60 (Minutes / Hour) X 60\n(Seconds / minute) = 31.5576 million seconds per year. A quick google search can\nconfirm the math. So finally, taking 31.5576 Million / 7.24 we get a value of\n4.358 Million blocks per year, which can be rounded up to "),t("strong",[e._v("4.36 Million blocks\nper year")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Possible Risks / Benefits")])]),e._v(" "),t("p",[e._v("I will split this up into two sections, doing nothing & doing the proposed\nchanges.")]),e._v(" "),t("p",[e._v("1a) Doing nothing Risks / Benefits: There are no structural risks per say doing\nnothing, but the stated inflation rate of the hub will continue to not match\nreality. There are very little benefits of doing nothing; besides the fact its\nworking just fine now as long as you don’t care how close stated inflation is vs\nreal inflation.")]),e._v(" "),t("p",[e._v("1b) Changing to recommended value Risks / Benefits: Again, I don’t think there\nare structural / game theory risks to making the blocks per year more closely\nmatch reality. On the other hand, changing this variable to more closely match\nreality is beneficial to all participants when doing any sort of economic\ncalculus. Currently the true inflation rate is actually lower than the stated\nrate by a factor of 10ish % (4.36 Mil blocks per year / 4.85 Mil blocks per\nyear). So while the target rate is 7%, the actual current rate is more like\n~6.29%.")]),e._v(" "),t("p",[t("strong",[e._v("Conclusion")])]),e._v(" "),t("p",[e._v("I know there isn’t a right answer for blocks per year. I fully expect this value\nto be fine tuned over the coming years / decades. This seems like a very good\nstarting place and a greatly beneficial change before we enter the post star\ngate world ☺")])])}),[],!1,null,null,null);o.default=a.exports}}]);