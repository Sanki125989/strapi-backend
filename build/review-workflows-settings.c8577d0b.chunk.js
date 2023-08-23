"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[8155],{97259:(et,U,a)=>{a.r(U),a.d(U,{default:()=>Qe});var t=a(67294),I=a(41054),P=a(86896),M=a(86706),_=a(88767),v=a(5458),ee=a(17034),te=a(185),ae=a(53979),oe=a(29728),re=a(49066),ne=a(77197),se=a(85018),le=a(45697),g=a.n(le),$=a(88972),y=a(41580),w=a(11047),d=a(53616);function ie({status:e,data:o}){return{type:d.QM,payload:{status:e,workflows:o}}}function de(e){return{type:d.x4,payload:{stageId:e}}}function ce(e={}){return{type:d.Ot,payload:e}}function j(e,o){return{type:d.Nj,payload:{stageId:e,...o}}}function ge(e,o){return{type:d.$k,payload:{newIndex:o,oldIndex:e}}}var A=a(75515),ue=a(99782);const L=(0,$.ZP)(ue.Z)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,me=(0,$.ZP)(y.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${A.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${L} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${A.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${L} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`;function z({children:e,...o}){return t.createElement(me,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...o},t.createElement(w.k,{gap:2},t.createElement(L,{"aria-hidden":!0}),t.createElement(A.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},e)))}z.propTypes={children:g().node.isRequired};var fe=a(63237),ve=a(48734),pe=a(74756),G=a(12028),Se=a(63081),we=a(11276),H=a(74571),he=a(16364),ye=a(54574),Ee=a(19270),ke=a(96404),We=a(20022),Ce=a(12814),De=a(61080),Re=a(13037),Ie=a(75194),Me=a(54878),$e=a(75642),Te=a(13920);const xe=(0,Re.s)();function be(){return t.createElement(y.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function K({id:e,index:o,canDelete:r,canReorder:m,isOpen:i=!1,stagesCount:s}){const n=l=>`${l+1} of ${s}`,c=l=>{k(u({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:f.value,position:n(l)}))},h=l=>{k(u({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:f.value,position:n(l)}))},F=()=>{k(u({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:f.value}))},E=(l,N)=>{k(u({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:f.value,position:n(l)})),W(ge(N,l))},[Z,k]=t.useState(null),{formatMessage:u}=(0,P.Z)(),{trackUsage:x}=(0,v.rS)(),W=(0,M.I0)(),[C,B]=t.useState(i),[f,V]=(0,I.U$)(`stages.${o}.name`),[p,D]=(0,I.U$)(`stages.${o}.color`),[{handlerId:S,isDragging:b,handleKeyDown:R},Xe,Ye,Je,J]=(0,$e.Y9)(m,{index:o,item:{name:f.value},onGrabItem:c,onDropItem:h,onMoveItem:E,onCancel:F,type:d.uL.STAGE}),qe=(0,Te.FE)(Xe,Ye),q=xe.map(({hex:l,name:N})=>({value:l,label:u({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:N}),color:l})),_e=q.find(({value:l})=>l===p.value.toUpperCase());return t.useEffect(()=>{J((0,De.rX)(),{captureDraggingState:!1})},[J,o]),t.createElement(y.x,{ref:qe},Z&&t.createElement(fe.T,{"aria-live":"assertive"},Z),b?t.createElement(be,null):t.createElement(ve.U,{size:"S",variant:"primary",onToggle:()=>{B(!C),C||x("willEditStage")},expanded:C,shadow:"tableShadow"},t.createElement(pe.B,{title:f.value,togglePosition:"left",action:t.createElement(w.k,null,r&&t.createElement(G.h,{background:"transparent",icon:t.createElement(We.Z,null),label:u({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>W(de(e))}),t.createElement(G.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":S,ref:Je,label:u({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:l=>l.stopPropagation(),onKeyDown:R},t.createElement(Ce.Z,null)))}),t.createElement(Se.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(we.r,{gap:4},t.createElement(H.P,{col:6},t.createElement(he.o,{...f,id:f.name,label:u({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:V.error??!1,onChange:l=>{f.onChange(l),W(j(e,{name:l.target.value}))},required:!0})),t.createElement(H.P,{col:6},t.createElement(ye.g,{error:D?.error??!1,name:p.name,id:p.name,required:!0},t.createElement(w.k,{direction:"column",gap:1,alignItems:"stretch"},t.createElement(Ee.Q,null,u({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"})),t.createElement(v.JV,{components:{Option:Ie.K,SingleValue:Me.R},error:D?.error,inputId:p.name,name:p.name,options:q,onChange:({value:l})=>{p.onChange({target:{value:l}}),W(j(e,{color:l}))},value:_e??{value:p.value,label:u({id:"Settings.review-workflows.stage.color.name.custom",defaultMessage:"Custom"}),color:p.value}}),t.createElement(ke.c,null))))))))}K.propTypes=g().shape({id:g().number.isRequired,color:g().string.isRequired,canDelete:g().bool.isRequired,canReorder:g().bool.isRequired,stagesCount:g().number.isRequired}).isRequired;const Ae=(0,$.ZP)(y.x)`
  position: relative;
`,Ze=(0,$.ZP)(y.x)`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;function O({stages:e}){const{formatMessage:o}=(0,P.Z)(),r=(0,M.I0)(),{trackUsage:m}=(0,v.rS)();return t.createElement(w.k,{direction:"column",gap:6,width:"100%"},t.createElement(Ae,{spacing:4,width:"100%"},t.createElement(Ze,{background:"neutral200",height:"100%",width:2,zIndex:1}),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},e.map((i,s)=>{const n=i?.id??i.__temp_key__;return t.createElement(y.x,{key:`stage-${n}`,as:"li"},t.createElement(K,{id:n,index:s,canDelete:e.length>1,isOpen:!i.id,canReorder:e.length>1,stagesCount:e.length}))}))),t.createElement(w.k,{direction:"column",gap:6},t.createElement(z,{type:"button",onClick:()=>{r(ce({name:""})),m("willCreateStage")}},o({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"}))))}O.defaultProps={stages:[]},O.propTypes={stages:g().arrayOf(g().shape({id:g().number,__temp_key__:g().number,name:g().string.isRequired}))};var Q=a(18172),Pe=a(18446),Le=a.n(Pe);const X={status:"loading",serverState:{currentWorkflow:null,workflows:[]},clientState:{currentWorkflow:{data:null,isDirty:!1,hasDeletedServerStages:!1}}};function Oe(e=X,o){return(0,Q.Uy)(e,r=>{const{payload:m}=o;switch(o.type){case d.QM:{const{status:i,workflows:s}=m;if(r.status=i,s?.length>0){let n=s[0];n={...n,stages:n.stages.map(c=>({...c,color:c?.color??d.FT}))},r.serverState.workflows=s,r.serverState.currentWorkflow=n,r.clientState.currentWorkflow.data=n,r.clientState.currentWorkflow.hasDeletedServerStages=!1}break}case d.x4:{const{stageId:i}=m,{currentWorkflow:s}=e.clientState;r.clientState.currentWorkflow.data.stages=s.data.stages.filter(n=>(n?.id??n.__temp_key__)!==i),s.hasDeletedServerStages||(r.clientState.currentWorkflow.hasDeletedServerStages=!!e.serverState.currentWorkflow.stages.find(n=>n.id===i));break}case d.Ot:{const{currentWorkflow:i}=e.clientState;i.data||(r.clientState.currentWorkflow.data={stages:[]});const s=Fe(r.clientState.currentWorkflow.data.stages);r.clientState.currentWorkflow.data.stages.push({...m,color:m?.color??d.FT,__temp_key__:s});break}case d.Nj:{const{currentWorkflow:i}=e.clientState,{stageId:s,...n}=m;r.clientState.currentWorkflow.data.stages=i.data.stages.map(c=>(c.id??c.__temp_key__)===s?{...c,...n}:c);break}case d.$k:{const{currentWorkflow:{data:{stages:i}}}=e.clientState,{newIndex:s,oldIndex:n}=m;if(s>=0&&s<i.length){const c=i[n];let h=[...i];h.splice(n,1),h.splice(s,0,c),r.clientState.currentWorkflow.data.stages=h}break}default:break}e.clientState.currentWorkflow.data&&(r.clientState.currentWorkflow.isDirty=!Le()((0,Q.Vk)(r.clientState.currentWorkflow).data,r.serverState.currentWorkflow))})}const Fe=(e=[])=>{const o=e.map(r=>r.id??r.__temp_key__);return Math.max(...o,-1)+1};function Be(e,o){const r=(0,M.oR)();(0,t.useEffect)(()=>{r.injectReducer(e,o)},[r,e,o])}var Ve=a(53752),T=a(87561);function Ne({formatMessage:e}){return T.Ry({stages:T.IX().of(T.Ry().shape({name:T.Z_().required(e({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,e({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})),color:T.Z_().required(e({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)}))})}var Ue=a(87751),je=a(12645);const ze=(0,$.ZP)(w.k)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`;function Y({name:e}){return t.createElement(w.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,v.Q1)(300)},t.createElement(ze,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(je.Z,{width:`${8/16}rem`})),t.createElement(A.Z,{fontWeight:"bold"},e))}Y.propTypes={name:g().string.isRequired};var Ge=a(27887);function He({type:e,item:o}){switch(e){case d.uL.STAGE:return t.createElement(Y,{...o});default:return null}}function Ke(){const{trackUsage:e}=(0,v.rS)(),{formatMessage:o}=(0,P.Z)(),r=(0,M.I0)(),{put:m}=(0,v.kY)(),{formatAPIError:i}=(0,v.So)(),s=(0,v.lm)(),{workflows:n,status:c,refetch:h}=(0,Ve.n)(),{status:F,clientState:{currentWorkflow:{data:E,isDirty:Z,hasDeletedServerStages:k}}}=(0,M.v9)(S=>S?.[d.sN]??X),[u,x]=(0,t.useState)(!1),{mutateAsync:W,isLoading:C}=(0,_.useMutation)(async({workflowId:S,stages:b})=>{const{data:{data:R}}=await m(`/admin/review-workflows/workflows/${S}/stages`,{data:b});return R},{onSuccess(){s({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),B=async(S,b)=>{try{return await W({workflowId:S,stages:b})}catch(R){return s({type:"warning",message:i(R)}),null}},f=async()=>{await B(E.id,E.stages),await h(),x(!1)},V=async()=>{await f()},p=()=>{x(S=>!S)},D=(0,I.TA)({enableReinitialize:!0,initialValues:E,async onSubmit(){k?x(!0):f()},validationSchema:Ne({formatMessage:o}),validateOnChange:!1});return Be(d.sN,Oe),(0,t.useEffect)(()=>{r(ie({status:c,data:n}))},[c,n,r]),(0,t.useEffect)(()=>{e("didViewWorkflow")},[]),t.createElement(v.O4,{permissions:Ue.Z.settings["review-workflows"].main},t.createElement(ee.A,null,t.createElement(v.SL,{name:o({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"})}),t.createElement(te.o,{tabIndex:-1},t.createElement(Ge.r,{renderItem:He}),t.createElement(I.Hy,{value:D},t.createElement(I.l0,{onSubmit:D.handleSubmit},t.createElement(ae.T,{primaryAction:t.createElement(oe.z,{startIcon:t.createElement(se.Z,null),type:"submit",size:"M",disabled:!Z,loading:!u&&C},o({id:"global.save",defaultMessage:"Save"})),title:o({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"}),subtitle:o({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:E?.stages?.length??0})}),t.createElement(re.D,null,F==="loading"&&t.createElement(ne.a,null,o({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})),t.createElement(O,{stages:D.values?.stages})))),t.createElement(v.QH,{bodyText:{id:"Settings.review-workflows.page.delete.confirm.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?"},isConfirmButtonLoading:C,isOpen:u,onToggleDialog:p,onConfirm:V}))))}const Qe=Ke}}]);
