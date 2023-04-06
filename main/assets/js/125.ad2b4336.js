(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{577:function(t,a,e){"use strict";e.r(a);var s=e(1),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"최신-퍼블릭-테스트넷에-참가하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#최신-퍼블릭-테스트넷에-참가하기"}},[t._v("#")]),t._v(" 최신 퍼블릭 테스트넷에 참가하기")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("최신 테스트넷")]),t._v(" "),e("p",[t._v("최신 테스트넷에 대한 정보는 다음의 "),e("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("테스트넷 리포"),e("OutboundLink")],1),t._v("를 참고하세요. 어떤 코스모스 SDK 버전과 제네시스 파일에 대한 정보가 포합되어있습니다.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[e("strong",[t._v("여기에서 더 진행하시기 전에 "),e("RouterLink",{attrs:{to:"/ko/gaia-tutorials/installation.html"}},[t._v("gaia")]),t._v("가 꼭 설치되어있어야 합니다.")],1)])]),t._v(" "),e("h2",{attrs:{id:"새로운-노드-세팅하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#새로운-노드-세팅하기"}},[t._v("#")]),t._v(" 새로운 노드 세팅하기")]),t._v(" "),e("blockquote",[e("p",[t._v("참고: 과거 테스트넷에서 풀 노드를 운영하셨다면 이 항목은 건너뛰시고 "),e("a",{attrs:{href:"#upgrading-from-previous-testnet"}},[t._v("과거 테스트넷에서 업그레이드 하기")]),t._v("를 참고하세요.")])]),t._v(" "),e("p",[t._v("다음 절차는 새로운 풀노드를 처음부터 세팅하는 절차입니다.")]),t._v(" "),e("p",[t._v("우선 노드를 실행하고 필요한 config 파일을 생성합니다:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAtLW1vbmlrZXIgJmx0O3lvdXJfY3VzdG9tX21vbmlrZXImZ3Q7Cg=="}}),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("참고")]),t._v(" "),e("p",[e("code",[t._v("--moniker")]),t._v("는 ASCII 캐릭터만을 지원합니다. Unicode 캐릭터를 이용하는 경우 노드 접근이 불가능할 수 있으니 참고하세요.")])]),t._v(" "),e("p",[e("code",[t._v("moniker")]),t._v("는 "),e("code",[t._v("~/.gaia/config/config.toml")]),t._v(" 파일을 통해 추후에 변경이 가능합니다:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBBIGN1c3RvbSBodW1hbiByZWFkYWJsZSBuYW1lIGZvciB0aGlzIG5vZGUKbW9uaWtlciA9ICZxdW90OyZsdDt5b3VyX2N1c3RvbV9tb25pa2VyJmd0OyZxdW90Owo="}}),t._v(" "),e("p",[t._v("최소 수수료보다 낮은 트랜잭션을 거절하는 스팸 방지 메커니즘을 활성화 하시려면 "),e("code",[t._v("~/.gaia/config/gaiad.toml")]),t._v(" 파일을 변경하시면 됩니다:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyMjIyMgbWFpbiBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFZhbGlkYXRvcnMgcmVqZWN0IGFueSB0eCBmcm9tIHRoZSBtZW1wb29sIHdpdGggbGVzcyB0aGFuIHRoZSBtaW5pbXVtIGZlZSBwZXIgZ2FzLgptaW5pbXVtX2ZlZXMgPSAmcXVvdDsmcXVvdDsK"}}),t._v(" "),e("p",[t._v("당신의 풀노드가 활성화 되었습니다! "),e("a",{attrs:{href:"#genesis-seeds"}},[t._v("제네시스와 시드")]),t._v("로 넘어가주세요.")]),t._v(" "),e("h2",{attrs:{id:"과거-테스트넷에서-업그레이드-하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#과거-테스트넷에서-업그레이드-하기"}},[t._v("#")]),t._v(" 과거 테스트넷에서 업그레이드 하기")]),t._v(" "),e("p",[t._v("다음은 과거 테스트넷에서 운영을 했었던 풀노드가 최신 테스트넷으로 업그레이드를 하기 위한 절차입니다.")]),t._v(" "),e("h3",{attrs:{id:"데이터-리셋"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데이터-리셋"}},[t._v("#")]),t._v(" 데이터 리셋")]),t._v(" "),e("p",[t._v("우선, 과거 파일을 삭제하고 데이터를 리셋합니다.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLmdhaWEvY29uZmlnL2FkZHJib29rLmpzb24gJEhPTUUvLmdhaWEvY29uZmlnL2dlbmVzaXMuanNvbgpnYWlhZCB1bnNhZmUtcmVzZXQtYWxsCg=="}}),t._v(" "),e("p",[t._v("이제 "),e("code",[t._v("priv_validator.json")]),t._v("과 "),e("code",[t._v("config.toml")]),t._v("을 제외하고 노드가 초기화 되었습니다. 만약 해당 노드에 연결된적이 있는 센트리노드나 풀노드가 같이 업그레이드 되지 않았다면 연결이 실패할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("경고")]),t._v(" "),e("p",[t._v("각 노드가 "),e("strong",[t._v("고유한")]),t._v(" "),e("code",[t._v("priv_validator.json")]),t._v("을 보유하고 있는 것을 확인하세요. 오래된 노드의 "),e("code",[t._v("priv_validator.json")]),t._v("을 다수의 새로운 노드로 복사하지 마세요. 동일한 "),e("code",[t._v("priv_validator.json")]),t._v("을 보유한 두개 이상의 노드가 동시에 운영될 경우, "),e("strong",[t._v("더블 사이닝")]),t._v("이 일어날 수 있습니다.")])]),t._v(" "),e("h3",{attrs:{id:"소프트웨어-업그레이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-업그레이드"}},[t._v("#")]),t._v(" 소프트웨어 업그레이드")]),t._v(" "),e("p",[t._v("이제 소프트웨어를 업그레이드할 시간입니다:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay5naXQKY2QgY29zbW9zLXNkawpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgbWFzdGVyCm1ha2UgaW5zdGFsbAo="}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("em",[t._v("참고")]),t._v(": 이 단계에서 문제가 있으시다면 최신 스테이블 GO 버전이 설치되어있는지 확인해주세요.")])]),t._v(" "),e("p",[t._v("위 예시에서는 가장 최신 스테이블 릴리즈가 있는 "),e("code",[t._v("master")]),t._v("를 사용합니다. 테스트넷마다 운용하는 릴리즈가 다를 경우가 있으니 "),e("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),e("OutboundLink")],1),t._v("를 확인하셔서 어떤 버전이 필요한지 확인하시고, "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDK 릴리즈 페이지"),e("OutboundLink")],1),t._v("에서 각 릴리즈에 대한 정보를 확인하세요.")]),t._v(" "),e("p",[t._v("이제 풀 노드가 깔끔하게 업그레이드 되었습니다!")]),t._v(" "),e("h2",{attrs:{id:"제네시스와-시드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#제네시스와-시드"}},[t._v("#")]),t._v(" 제네시스와 시드")]),t._v(" "),e("h3",{attrs:{id:"제네시스-파일-복사하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#제네시스-파일-복사하기"}},[t._v("#")]),t._v(" 제네시스 파일 복사하기")]),t._v(" "),e("p",[t._v("테스트넷의 "),e("code",[t._v("genesis.json")]),t._v("파일을 "),e("code",[t._v("gaiad")]),t._v("의 config 디렉토리로 가져옵니다.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmdhaWEvY29uZmlnCmN1cmwgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy90ZXN0bmV0cy9tYXN0ZXIvbGF0ZXN0L2dlbmVzaXMuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),t._v(" "),e("p",[t._v("위 예시에서는 최신 테스트넷에 대한 정보가 포함되어있는 [테스트넷 repo]의 "),e("code",[t._v("latest")]),t._v("를 이용하는 것을 참고하세요. 만약 다른 테스트넷에 연결하신다면 해당 테스트넷의 파일을 가져오는 것인지 확인하세요.")]),t._v(" "),e("p",[t._v("설정이 올바르게 작동하는지 확인하기 위해서는 다음을 실행하세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),t._v(" "),e("h3",{attrs:{id:"시드-노드-추가하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시드-노드-추가하기"}},[t._v("#")]),t._v(" 시드 노드 추가하기")]),t._v(" "),e("p",[t._v("이제 노드가 다른 피어들을 찾는 방법을 알아야합니다. "),e("code",[t._v("$HOME/.gaia/config/config.toml")]),t._v("에 안정적인 시드 노드들을 추가할 차례입니다. "),e("code",[t._v("testnets")]),t._v(" repo에 각 테스트넷에 대한 시드 노드 링크가 포함되어있습니다. 만약 현재 운영되고 있는 테스트넷을 참가하고 싶으시다면 "),e("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("에서 어떤 노드를 이용할지 확인하세요.")]),t._v(" "),e("p",[t._v("만약 해당 시드가 작동하지 않는다면, 추가적인 시드와 피어들을 "),e("a",{attrs:{href:"https://explorer.cosmos.network/nodes",target:"_blank",rel:"noopener noreferrer"}},[t._v("코스모스 익스플로러"),e("OutboundLink")],1),t._v("를 통해 확인하실 수 있습니다. "),e("code",[t._v("Full Nodes")]),t._v(" 탭을 들어가셔서 프라이빗("),e("code",[t._v("10.x.x.x")]),t._v(") 또는 로컬 IP 주소("),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Private_network",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en.wikipedia.org/wiki/Private_network"),e("OutboundLink")],1),t._v(")가 "),e("em",[t._v("아닌")]),t._v(" 노드를 열어보세요. "),e("code",[t._v("Persistent Peer")]),t._v(" 값에 연결 스트링(connection string)이 표기되어 있습니다. 가장 최적화된 결과를 위해서는 4-6을 이용하세요.")]),t._v(" "),e("p",[t._v("이 외에도 "),e("a",{attrs:{href:"https://riot.im/app/#/room/#cosmos-validators:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("밸리데이터 라이엇 채팅방"),e("OutboundLink")],1),t._v("을 통해서 피어 요청을 할 수 있습니다.")]),t._v(" "),e("p",[t._v("시드와 피어에 대한 더 많은 정보를 원하시면 "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/develop/docs/tendermint-core/using-tendermint.md#peers",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("를 확인하세요.")]),t._v(" "),e("h2",{attrs:{id:"풀노드-운영하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#풀노드-운영하기"}},[t._v("#")]),t._v(" 풀노드 운영하기")]),t._v(" "),e("p",[t._v("다음 커맨드로 풀노드를 시작하세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),t._v(" "),e("p",[t._v("모든 것이 잘 작동하고 있는지 확인하기 위해서는:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),t._v(" "),e("p",[t._v("네트워크 상태를 "),e("a",{attrs:{href:"https://explorecosmos.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("코스모스 익스플로러"),e("OutboundLink")],1),t._v("를 통해 확인하세요. 현재 풀 노드가 현재 블록높이로 싱크되었을 경우, 익스플로러의 "),e("a",{attrs:{href:"https://explorecosmos.network/validators",target:"_blank",rel:"noopener noreferrer"}},[t._v("풀 노드 리스트"),e("OutboundLink")],1),t._v("에 표시가 될 것입니다. 익스플로러가 모든 노드에 연결하지는 않아 표시가 되지 않을 수 있다는 점 참고해주십시오.")]),t._v(" "),e("h2",{attrs:{id:"상태-내보내기-export-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#상태-내보내기-export-state"}},[t._v("#")]),t._v(" 상태 내보내기(Export State)")]),t._v(" "),e("p",[t._v("Gaia는 현재 애플리케이션의 상태를 JSON파일 형태로 내보낼 수 있습니다. 이런 데이터는 수동 분석과 새로운 네트워크의 제네시스 파일로 이용될 때 유용할 수 있습니다.")]),t._v(" "),e("p",[t._v("현재 상태를 내보내기 위해서는:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),t._v(" "),e("p",[t._v("특정 블록 높이의 상태를 내보낼 수 있습니다(해당 블록 처리 후 상태):")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),t._v(" "),e("p",[t._v("만약 해당 상태를 기반으로 새로운 네트워크를 시작하시려 한다면, "),e("code",[t._v("--for-zero-height")]),t._v(" 플래그를 이용하셔서 내보내기를 실행해주세요:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdIC0tZm9yLXplcm8taGVpZ2h0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),t._v(" "),e("h2",{attrs:{id:"밸리데이터-노드로-업그레이드-하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#밸리데이터-노드로-업그레이드-하기"}},[t._v("#")]),t._v(" 밸리데이터 노드로 업그레이드 하기")]),t._v(" "),e("p",[t._v("이제 풀노드가 활성화 되었습니다! 다음은 무엇일까요?")]),t._v(" "),e("p",[t._v("이제는 해당 풀노드를 업그레이드 하여 코스모스 밸리데이터가 될 수 있습니다. 상위 100개 밸리데이터는 코스모스 허브의 블록 생성과 제안을 할 수 있습니다. 밸리데이터 노드로 업그레이드 하시기 위해서는 "),e("RouterLink",{attrs:{to:"/ko/gaia-tutorials/validators/validator-setup.html"}},[t._v("밸리데이터 설정하기")]),t._v(" 항목으로 넘어가주세요.")],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);