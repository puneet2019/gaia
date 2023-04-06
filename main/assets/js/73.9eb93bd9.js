(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{606:function(t,a,c){"use strict";c.r(a);var s=c(1),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"join-mainnet-quick-start"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#join-mainnet-quick-start"}},[t._v("#")]),t._v(" Join Mainnet Quick Start")]),t._v(" "),c("p",[c("strong",[t._v("Bootstrap a  "),c("code",[t._v("cosmoshub-4")]),t._v(" mainnet node")])]),t._v(" "),c("h3",{attrs:{id:"prerequisites"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),c("blockquote",[c("p",[c("strong",[t._v("Note")]),t._v(": Make sure the "),c("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[t._v("Gaia CLI is installed")]),t._v(".")],1)]),t._v(" "),c("h3",{attrs:{id:"sync-options"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#sync-options"}},[t._v("#")]),t._v(" Sync Options")]),t._v(" "),c("p",[t._v("To quickly get started, node operators can choose to sync via State Sync or by downloading a snapshot from Quicksync. State Sync works by replaying larger chunks of application state directly rather than replaying individual blocks or consensus rounds. Quicksync is a service provided courtesy of ChainLayer, and offers historical state of the chain available for download every 24 hours. For more advanced information on setting up a node, see the Sync Options section of the full "),c("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("Joining Mainnet Tutorial")])],1),t._v(" "),c("tabs",{attrs:{options:{useUrlFragment:!1}}},[c("tab",{attrs:{name:"State Sync"}},[c("p",[t._v("To enable state sync, visit an "),c("a",{attrs:{href:"https://www.mintscan.io/cosmos/blocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("explorer"),c("OutboundLink")],1),t._v(" to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000. Set these parameters in the code snippet below "),c("code",[t._v("<BLOCK_HEIGHT>")]),t._v(" and "),c("code",[t._v("<BLOCK_HASH>")])]),t._v(" "),c("p",[t._v("For reference, the list of "),c("code",[t._v("rpc_servers")]),t._v(" and "),c("code",[t._v("persistent")]),t._v(" peers can be found in the "),c("a",{attrs:{href:"https://github.com/cosmos/chain-registry/blob/master/cosmoshub/chain.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosmos hub chain-registry repo"),c("OutboundLink")],1),t._v(".")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBCdWlsZCBnYWlhZCBiaW5hcnkgYW5kIGluaXRpYWxpemUgY2hhaW4KY2QgJEhPTUUKZ2l0IGNsb25lIC1iIHY5LjAuMCBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2dhaWEgLS1kZXB0aD0xCmNkIGdhaWFkCm1ha2UgaW5zdGFsbApnYWlhZCBpbml0IENVU1RPTV9NT05JS0VSIC0tY2hhaW4taWQgY29zbW9zaHViLTQKCiNTZXQgbWluaW11bSBnYXMgcHJpY2UgJmFtcDsgcGVlcnMKc2VkIC1pJycgJ3MvbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7JnF1b3Q7L21pbmltdW0tZ2FzLXByaWNlcyA9ICZxdW90OzAuMDAyNXVhdG9tJnF1b3Q7LycgJEhPTUUvLmdhaWEvY29uZmlnL2FwcC50b21sCnNlZCAtaScnICdzL3BlcnNpc3RlbnRfcGVlcnMgPSAmcXVvdDsmcXVvdDsvcGVyc2lzdGVudF9wZWVycyA9ICcmcXVvdDtcJnF1b3Q7JChjdXJsIC1zIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jb3Ntb3MvY2hhaW4tcmVnaXN0cnkvbWFzdGVyL2Nvc21vc2h1Yi9jaGFpbi5qc29uIHwganEgLXIgJ1tmb3JlYWNoIC5wZWVycy5zZWVkc1tdIGFzICRpdGVtICgmcXVvdDsmcXVvdDs7ICZxdW90O1woJGl0ZW0uaWQpQFwoJGl0ZW0uYWRkcmVzcykmcXVvdDspXSB8IGpvaW4oJnF1b3Q7LCZxdW90OyknKVwmcXVvdDsmcXVvdDsnLycgJEhPTUUvLmdhaWEvY29uZmlnL2NvbmZpZy50b21sCgojIENvbmZpZ3VyZSBTdGF0ZSBzeW5jCnNlZCAtaScnICdzL2VuYWJsZSA9IGZhbHNlL2VuYWJsZSA9IHRydWUvJyAkSE9NRS8uZ2FpYS9jb25maWcvY29uZmlnLnRvbWwKc2VkIC1pJycgJ3MvdHJ1c3RfaGVpZ2h0ID0gMC90cnVzdF9oZWlnaHQgPSAmbHQ7QkxPQ0tfSEVJR0hUJmd0Oy8nICRIT01FLy5nYWlhL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWknJyAncy90cnVzdF9oYXNoID0gJnF1b3Q7JnF1b3Q7L3RydXN0X2hhc2ggPSAmcXVvdDsmbHQ7QkxPQ0tfSEFTSCZndDsmcXVvdDsvJyAkSE9NRS8uZ2FpYS9jb25maWcvY29uZmlnLnRvbWwKc2VkIC1pJycgJ3MvcnBjX3NlcnZlcnMgPSAmcXVvdDsmcXVvdDsvcnBjX3NlcnZlcnMgPSAmcXVvdDtodHRwczpcL1wvY29zbW9zLXJwYy5wb2xrYWNodS5jb206NDQzLGh0dHBzOlwvXC9ycGMtY29zbW9zaHViLWlhLmNvc21vc2lhLm5vdGlvbmFsLnZlbnR1cmVzOjQ0MyxodHRwczpcL1wvcnBjLmNvc21vcy5uZXR3b3JrOjQ0MyZxdW90Oy8nICRIT01FLy5nYWlhL2NvbmZpZy9jb25maWcudG9tbAoKI1N0YXJ0IEdhaWEKZ2FpYWQgc3RhcnQgLS14LWNyaXNpcy1za2lwLWFzc2VydC1pbnZhcmlhbnRzCg=="}})],1),t._v(" "),c("tab",{attrs:{name:"Quicksync"}},[c("blockquote",[c("p",[c("strong",[t._v("Note")]),t._v(": Make sure to set the "),c("code",[t._v("--home")]),t._v(" flag when initializing and starting "),c("code",[t._v("gaiad")]),t._v(" if mounting quicksync data externally.")])]),t._v(" "),c("h4",{attrs:{id:"create-gaia-home-config"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#create-gaia-home-config"}},[t._v("#")]),t._v(" Create Gaia Home & Config")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgJEhPTUUvLmdhaWEvY29uZmlnIC1wCg=="}}),t._v(" "),c("h4",{attrs:{id:"start-quicksync-download"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#start-quicksync-download"}},[t._v("#")]),t._v(" Start Quicksync Download")]),t._v(" "),c("p",[t._v("Node Operators can decide how much of historical state they want to preserve by choosing between "),c("code",[t._v("Pruned")]),t._v(", "),c("code",[t._v("Default")]),t._v(", and "),c("code",[t._v("Archive")]),t._v(". See the "),c("a",{attrs:{href:"https://quicksync.io/networks/cosmos.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quicksync.io downloads"),c("OutboundLink")],1),t._v(" for up-to-date snapshot sizes.")]),t._v(" "),c("tabs",{attrs:{options:{useUrlFragment:!1}}},[c("tab",{attrs:{name:"Default"}},[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash=",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgd2dldCBsaWJsejQtdG9vbCBhcmlhMiBqcSAteQoKZXhwb3J0IFVSTD1gY3VybCAtTCBodHRwczovL3F1aWNrc3luYy5pby9jb3Ntb3MuanNvbnxqcSAtciAnLltdIHxzZWxlY3QoLmZpbGU9PSZxdW90O2Nvc21vc2h1Yi00LWRlZmF1bHQmcXVvdDspfC51cmwnYAoKZWNobyAkVVJMCgpjZCAkSE9NRS8uZ2FpYQoKYXJpYTJjIC14NSAkVVJMCg=="}})],1),t._v(" "),c("tab",{attrs:{name:"Pruned"}},[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash=",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgd2dldCBsaWJsejQtdG9vbCBhcmlhMiBqcSAteQoKZXhwb3J0IFVSTD1gY3VybCAtTCBodHRwczovL3F1aWNrc3luYy5pby9jb3Ntb3MuanNvbnxqcSAtciAnLltdIHxzZWxlY3QoLmZpbGU9PSZxdW90O2Nvc21vc2h1Yi00LXBydW5lZCZxdW90Oyl8LnVybCdgCgplY2hvICRVUkwKCmNkICRIT01FLy5nYWlhCgphcmlhMmMgLXg1ICRVUkwK"}})],1),t._v(" "),c("tab",{attrs:{name:"Archive"}},[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash=",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgd2dldCBsaWJsejQtdG9vbCBhcmlhMiBqcSAteQoKZXhwb3J0IFVSTD1gY3VybCAtTCBodHRwczovL3F1aWNrc3luYy5pby9jb3Ntb3MuanNvbnxqcSAtciAnLltdIHxzZWxlY3QoLmZpbGU9PSZxdW90O2Nvc21vc2h1Yi00LWFyY2hpdmUmcXVvdDspfC51cmwnYAoKZWNobyAkVVJMCgpjZCAkSE9NRS8uZ2FpYQoKYXJpYTJjIC14NSAkVVJMCg=="}})],1)],1),t._v(" "),c("p",[c("strong",[t._v("The download logs should look like the following")])]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"MDEvMTEgMDc6NDg6MTcgW05PVElDRV0gRG93bmxvYWRpbmcgMSBpdGVtKHMpClsjN2NjYTVhIDQ4NE1pQi8yNzFHaUIoMCUpIENOOjUgREw6MTA4TWlCIEVUQTo0Mm00MXNdCg=="}}),t._v(" "),c("p",[c("strong",[t._v("Completed Download Process:")])]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"WyM3Y2NhNWEgMjcxR2lCLzI3MUdpQig5OSUpIENOOjEgREw6NzdNaUJdCjAxLzExIDA4OjMyOjE5IFtOT1RJQ0VdIERvd25sb2FkIGNvbXBsZXRlOiAvbW50L3F1aWNrc3luY18wMS9jb3Ntb3NodWItNC1wcnVuZWQuMjAyMjAxMTEuMDMxMC50YXIubHo0CgpEb3dubG9hZCBSZXN1bHRzOgpnaWQgICB8c3RhdHxhdmcgc3BlZWQgIHxwYXRoL1VSSQo9PT09PT0rPT09PSs9PT09PT09PT09PSs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CjdjY2E1YXxPSyAgfCAgIDEwNU1pQi9zfC9tbnQvcXVpY2tzeW5jXzAxL2Nvc21vc2h1Yi00LXBydW5lZC4yMDIyMDExMS4wMzEwLnRhci5sejQKClN0YXR1cyBMZWdlbmQ6CihPSyk6ZG93bmxvYWQgY29tcGxldGVkLgo="}}),t._v(" "),c("h4",{attrs:{id:"unzip"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#unzip"}},[t._v("#")]),t._v(" Unzip")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bHo0IC1jIC1kIGBiYXNlbmFtZSAkVVJMYCB8IHRhciB4ZiAtCg=="}}),t._v(" "),c("h4",{attrs:{id:"copy-address-book-quicksync"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#copy-address-book-quicksync"}},[t._v("#")]),t._v(" Copy Address Book Quicksync")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBodHRwczovL3F1aWNrc3luYy5pby9hZGRyYm9vay5jb3Ntb3MuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9hZGRyYm9vay5qc29uCg=="}}),t._v(" "),c("h4",{attrs:{id:"start-gaia"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#start-gaia"}},[t._v("#")]),t._v(" Start Gaia")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQgLS14LWNyaXNpcy1za2lwLWFzc2VydC1pbnZhcmlhbnRzCgo="}})],1)],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);