import{Y as t,H as g,z as o,v as i,b as c,o as l,e as m,d as x,a3 as h}from"./index-Cf5fh-nS.js";const a={CALLING:"calling",CONNECTED:"connected",ENDED:"ended",ERROR:"Error connecting"},b=({onCancel:e})=>t({class:"flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95",onCreated(s,r){window.setTimeout(()=>{r.state.view=a.CONNECTED},2e3)}},[t({class:"w-24 h-24 rounded-full bg-muted flex items-center justify-center animate-pulse"},[g({src:"",size:"lg",fallbackText:"User Name"})]),t({class:"space-y-2 text-center"},[o({class:"text-xl font-semibold"},"Calling..."),o({class:"text-sm text-muted-foreground block"},"Waiting for others to join")]),i({class:"w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center mt-8",click:e},[c({size:"sm"},l.x)])]),p=({onRedial:e,onExit:s})=>t({class:"flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95",onCreated(r,n){window.setTimeout(()=>{n.handleExit()},2e3)}},[t({class:"w-24 h-24 rounded-full bg-muted flex items-center justify-center"},[c({size:"lg",class:"text-muted-foreground"},l.phone.missed)]),t({class:"space-y-2 text-center"},[o({class:"text-xl font-semibold"},"Call Ended"),o({class:"text-sm text-muted-foreground block"},"Duration: 45:23")]),t({class:"flex space-x-4"},[i({class:"w-12 h-12 rounded-full bg-primary hover:bg-primary text-primary-foreground flex items-center justify-center mt-8",click:e},[c({size:"sm"},l.phone.oubound)]),i({class:"w-12 h-12 rounded-full bg-muted hover:bg-muted text-muted-foreground flex items-center justify-center mt-8",click:s},[c({size:"sm"},l.x)])])]),y=({errorMessage:e,onRetry:s,onExit:r})=>t({class:"flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95"},[t({class:"w-16 h-16 rounded-full bg-red-100 flex items-center justify-center"},[c({size:"lg",class:"text-red-500"},l.warning)]),t({class:"space-y-2 text-center max-w-md"},[o({class:"text-xl font-semibold text-red-500"},"Connection Error"),o({class:"text-sm text-muted-foreground block"},e)]),t({class:"flex space-x-4"},[i({class:"w-12 h-12 rounded-full bg-primary hover:bg-primary text-primary-foreground flex items-center justify-center mt-8",click:s},[c({size:"sm"},l.phone.oubound)]),i({class:"w-12 h-12 rounded-full bg-muted hover:bg-muted text-muted-foreground flex items-center justify-center mt-8",click:r},[c({size:"sm"},l.x)])])]),u=({action:e,className:s,icon:r})=>i({class:s,click:(n,d)=>{e(n,d)}},[c({size:"sm"},r)]),w=({actions:e})=>t({class:"absolute bottom-6 left-0 right-0 flex items-center gap-4 w-60 mx-auto"},[u({action:e.toggleCamera,className:"w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",icon:l.videoCamera.default}),u({action:e.toggleMute,className:"w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",icon:l.microphone}),u({action:e.endCall,className:"w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center",icon:l.x}),u({action:e.toggleFullscreen,className:"w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center",icon:l.expand})]),f=m(({name:e,isMuted:s,isMainParticipant:r=!1},n)=>t({class:`relative rounded-lg overflow-hidden border ${r?"w-full h-full":"w-full h-32"}`},[t({class:"w-full h-full"}),t({class:"absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent"},[t({class:"flex items-center justify-between"},[o({class:"text-sm font-medium"},e),s&&o({class:"flex items-center"},[c({size:"xs"},l.microphone)])])]),n])),C=({participants:e})=>t({class:"absolute flex flex-col gap-2 right-2 top-2 w-40 md:w-60"},e.map(s=>t({class:"overflow-hidden rounded-lg shadow-sm"},[f({name:s.name,isMuted:s.isMuted})]))),E=({participants:e})=>t({class:"flex-1 p-4 flex gap-4"},[t({class:"flex-1 relative"},[f({...e[0],isMainParticipant:!0},[C({participants:e.slice(1)})])]),w({actions:{toggleMute:()=>console.log("Toggle mute"),toggleCamera:()=>console.log("Toggle camera"),endCall:(s,r)=>{console.log("End call"),r.state.view=a.ENDED},toggleFullscreen:()=>console.log("Toggle fullscreen")}})]),N=({title:e,participantCount:s})=>t({class:"p-4 pt-6 pb-0 flex items-center justify-between"},[t({class:"flex items-center gap-2"},[o({class:"text-xl font-semibold pl-2"},e),o({class:"text-sm text-muted-foreground"},`${s} participants`)])]),v=({participants:e})=>t({class:"flex flex-auto flex-col"},[N({title:"Video Chat",participantCount:4}),E({participants:e})]),j=[{name:"Craig Press",isMuted:!0},{name:"Makenna Bergson",isMuted:!1},{name:"Allison Septimus",isMuted:!1},{name:"You",isMuted:!1}],D=()=>{const e={setupStates(){return{view:a.CALLING,errorMessage:""}},beforeDestroy(){this.state.view=a.CALLING},handleExit(){if(window.history.length>2){window.history.back();return}app.navigate("/messages/all")},handleRetry(){this.state.view=a.CALLING}};return new x(e,[t({class:"flex flex-col w-full h-screen bg-background"},[h("view",(s,r,n)=>{switch(s){case a.CALLING:return b({onCancel:e.handleExit});case a.CONNECTED:return v({participants:j});case a.ENDED:return p({onRedial:()=>n.handleRetry(),onExit:e.handleExit});case a.ERROR:return y({errorMessage:n.state.errorMessage||"Failed to connect to the call. Please check your connection and try again.",onRetry:()=>e.handleRetry(n),onExit:e.handleExit})}})])])};export{D as VideoChatPage,D as default};
