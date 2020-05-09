(this["webpackJsonpbemp-app"]=this["webpackJsonpbemp-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/add.0e671e9c.svg"},44:function(e,t,a){e.exports=a.p+"static/media/close.4c4413da.svg"},47:function(e,t,a){e.exports=a(83)},52:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(41),r=a.n(l),i=a(5),c=a(6),o=a(8),u=a(7),m=a(10),h=a(16);a(52);var p=function(){return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper headingText"},s.a.createElement("h1",null,"Love in the Time of Allergies")),s.a.createElement("div",{className:"wrapper homeIntro"},s.a.createElement("p",null,"Make sure to account for your guest's dietary needs at your next party. Create guest profiles with allergies and diets, add them to your party, and search for recipes that will accomodate their needs.")))},d=a(21),g=a(24),f=a.n(g);a(53),a(54);f.a.initializeApp({apiKey:"AIzaSyAeYLavcsXAu2qyS3m3sl80bPDNeCrUqlk",authDomain:"bemp-app-ed66c.firebaseapp.com",databaseURL:"https://bemp-app-ed66c.firebaseio.com",projectId:"bemp-app-ed66c",storageBucket:"bemp-app-ed66c.appspot.com",messagingSenderId:"929043957791",appId:"1:929043957791:web:052c46f8f3643e8f5fad2a"});f.a.storage();var E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).populateAllergies=function(){var t=[];e.state.isDairyFree&&t.push("Dairy"),e.state.isEggFree&&t.push("Egg"),e.state.isGrainFree&&t.push("Grain"),e.state.isPeanutFree&&t.push("Peanut "),e.state.isSeafoodFree&&t.push("Seafood"),e.state.isSesameFree&&t.push("Sesame"),e.state.isShellfishFree&&t.push("Shellfish"),e.state.isSoyFree&&t.push("Soy"),e.state.isSulfiteFree&&t.push("Sulfite"),e.state.isTreeNutFree&&t.push("Tree Nut"),e.state.isWheatFree&&t.push("Wheat"),e.setState({allergies:t})},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value,l=a.type,r=a.checked;"checkbox"===l?e.setState(Object(d.a)({},n,r),(function(){e.populateAllergies()})):e.setState(Object(d.a)({},n,s))},e.handleImageChange=function(t){var a=t.target.files;e.setState({files:a})},e.handleUploadImage=function(t){t.preventDefault();if(e.state.files){var a=e.state.files[0];f.a.storage().ref("".concat("images","/").concat(a.name)).put(a).then((function(){f.a.storage().ref("".concat("images")).child(a.name).getDownloadURL().then((function(t){e.setState({photoURL:t}),document.getElementById("guestImg").src=t}))}))}},e.clearState=function(){e.setState({files:null,photoURL:"https://www.rawlinsdavy.com/wp-content/uploads/2018/12/profile-placeholder-300x300.png",name:"",email:"",isPetFriendly:!1,diet:"",isDairyFree:!1,isEggFree:!1,isGlutenFree:!1,isGrainFree:!1,isPeanutFree:!1,isSeafoodFree:!1,isSesameFree:!1,isShellfishFree:!1,isSoyFree:!1,isSulfiteFree:!1,isTreeNutFree:!1,isWheatFree:!1,allergies:[]})},e.handleSubmit=function(t){(t.preventDefault(),e.state.name&&e.state.email)?(f.a.database().ref("/Guests/").push({name:e.state.name,email:e.state.email,petFriendly:e.state.isPetFriendly,diet:e.state.diet,allergies:e.state.allergies,photoURL:e.state.photoURL}),e.clearState()):alert("Name and Email are mandatory fields")},e.state={files:null,photoURL:"https://www.rawlinsdavy.com/wp-content/uploads/2018/12/profile-placeholder-300x300.png",name:"",email:"",isPetFriendly:!1,diet:"",isDairyFree:!1,isEggFree:!1,isGlutenFree:!1,isGrainFree:!1,isPeanutFree:!1,isSeafoodFree:!1,isSesameFree:!1,isShellfishFree:!1,isSoyFree:!1,isSulfiteFree:!1,isTreeNutFree:!1,isWheatFree:!1,allergies:[]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.allergies.toString();return console.log(t),s.a.createElement("section",{className:"createGuestSection wrapper"},s.a.createElement("h2",null,"Create Your Guests"),s.a.createElement("div",{className:"createGuestCenter"},s.a.createElement("form",{className:"createGuestForm",onSubmit:this.handleSubmit},s.a.createElement("label",{className:"guestName",htmlFor:"Guest Name"}),s.a.createElement("input",{className:"textInput",type:"text",value:this.state.name,name:"name",placeholder:"Name",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"Guest email"}),s.a.createElement("input",{className:"textInput",type:"email",value:this.state.email,name:"email",placeholder:"Email",onChange:this.handleChange}),s.a.createElement("div",{className:"petFriend"},s.a.createElement("label",{htmlFor:""},"Are you ok with pets?"),s.a.createElement("input",{type:"checkbox",value:this.state.isPetFriendly,name:"isPetFriendly",checked:this.state.isPetFriendly,onChange:this.handleChange})),s.a.createElement("div",{className:"imageInput"},s.a.createElement("p",null,"Upload an image for your profile"),s.a.createElement("label",{htmlFor:"select an image to upload"}),s.a.createElement("input",{value:this.state.image,type:"file",onChange:function(t){e.handleImageChange(t)}}),s.a.createElement("button",{onClick:function(t){e.handleUploadImage(t)}},"Upload")),s.a.createElement("h3",{className:"dietHeader"},"Diet"),s.a.createElement("div",{className:"dietInput"},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"diet",value:"Gluten free",checked:"Gluten free"===this.state.diet,onChange:this.handleChange})," ","Gluten Free"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"diet",value:"Vegetarian",checked:"Vegetarian"===this.state.diet,onChange:this.handleChange})," ","Vegetarian"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"diet",value:"Vegan",checked:"Vegan"===this.state.diet,onChange:this.handleChange})," ","Vegan"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"diet",value:"Pescetarian",checked:"Pescetarian"===this.state.diet,onChange:this.handleChange})," ","Pescetarian"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"diet",value:"Paleo",checked:"Paleo"===this.state.diet,onChange:this.handleChange})," ","Paleo"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"diet",value:"Whole30",checked:"Whole30"===this.state.diet,onChange:this.handleChange})," ","Whole 30")),s.a.createElement("h3",null,"Intolerances"),s.a.createElement("ul",{className:"intolerances"},s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isDairyFree",onChange:this.handleChange,checked:this.state.isDairyFree})," ","Dairy")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isEggFree",onChange:this.handleChange,checked:this.state.isEggFree})," ","Egg")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isGrainFree",onChange:this.handleChange,checked:this.state.isGrainFree})," ","Grain")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isPeanutFree",onChange:this.handleChange,checked:this.state.isPeanutFree})," ","Peanut")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isSeafoodFree",onChange:this.handleChange,checked:this.state.isSeafoodFree})," ","Seafood")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isSesameFree",onChange:this.handleChange,checked:this.state.isSesameFree})," ","Sesame")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isShellfishFree",onChange:this.handleChange,checked:this.state.isShellfishFree})," ","Shellfish")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isSoyFree",onChange:this.handleChange,checked:this.state.isSoyFree})," ","Soy")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isSulfiteFree",onChange:this.handleChange,checked:this.state.isSulfiteFree})," ","Sulfite")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isTreeNutFree",onChange:this.handleChange,checked:this.state.isTreeNutFree})," ","Tree Nut")),s.a.createElement("li",null,s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"isWheatFree",onChange:this.handleChange,checked:this.state.isWheatFree})," ","Wheat"))),s.a.createElement("button",{onClick:function(t){return e.handleSubmit(t)}},"Submit")),s.a.createElement("h5",null,"Guest Information"),s.a.createElement("div",{className:"guestInformation"},s.a.createElement("div",{className:"guestInfoCenter"},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{className:"guestImage",id:"guestImg",src:this.state.photoURL,alt:""})),s.a.createElement("p",null,"Name: ",this.state.name),s.a.createElement("p",null,"Email: ",this.state.email),s.a.createElement("p",null,"Pets ok:"," ",this.state.isPetFriendly?"pet friendly":" "),s.a.createElement("p",null,"Diet: ",this.state.diet),s.a.createElement("p",null,"Intolerances: ",this.state.allergies)))))}}]),a}(n.Component),y=a(42),v=a.n(y),b=a(4),N=a.n(b),C=a(43),L=a.n(C),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={guest:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.database().ref("/Guests").on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push({guestInfo:a[s],guestID:s});e.setState({guest:n}),console.log(e.state.guestID)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"viewUL"},this.state.guest.map((function(t){return s.a.createElement("div",{className:"viewLIContainer"},s.a.createElement("li",{classname:"viewLI",key:"cpag_"+t.guestID,onClick:function(){return e.props.getChoice(t.guestID)},id:t.guestID},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("span",{"aria-label":"add"},s.a.createElement("img",{className:"add",src:L.a,alt:""})),s.a.createElement("img",{className:"guestImg",src:t.guestInfo.photoURL,alt:t.guestInfo.name})),s.a.createElement("p",{className:"guestName"},t.guestInfo.name),s.a.createElement("p",null,t.guestInfo.email)))})))}}]),a}(n.Component),S=a(44),I=a.n(S),F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getRecipes=function(t){t.preventDefault();var a=e.state.intoleranceList.join(),n=e.state.dietList.join();v()({method:"GET",url:"https://api.spoonacular.com/recipes/search",params:{apiKey:"ac3ee15e730b4a6c9dbc8bfa56524854",query:"dinner",format:"json",intolerances:a,diet:n}}).then((function(t){e.setState({recipes:t.data.results})})).catch((function(e){alert(e)}))},e.updateState=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e.getUserKey=function(t){var a=e.state.guestsKeys;!1===a.includes(t)&&a.push(t),e.setState({guestsKeys:a},(function(){e.convertKeys(),e.createIntolerancesList(),e.createDietList()}))},e.createDietList=function(){for(var t=[],a=0;a<e.state.guestsKeys.length;a++)N.a.database().ref("/Guests/"+e.state.guestsKeys[a]).on("value",(function(e){var a=e.val().diet;!1===t.includes(a)&&void 0!==a&&t.push(a)}));e.setState({dietList:t})},e.createIntolerancesList=function(){for(var t=[],a=0;a<e.state.guestsKeys.length;a++)N.a.database().ref("/Guests/"+e.state.guestsKeys[a]).on("value",(function(e){for(var a=e.val().allergies,n=0;n<a.length;n++)!1===t.includes(a[n])&&void 0!==a[n]&&t.push(a[n])}));e.setState({intoleranceList:t})},e.convertKeys=function(){for(var t=[],a=function(a){N.a.database().ref("/Guests/"+e.state.guestsKeys[a]).on("value",(function(n){var s=n.val();s.key=e.state.guestsKeys[a],t.push(s)}))},n=0;n<e.state.guestsKeys.length;n++)a(n);e.setState({addedGuests:t})},e.submitParty=function(t){if(t.preventDefault(),e.state.partyName&&e.state.partyAddress&&""!==e.state.partyDetails){var a={};a.partyName=e.state.partyName,a.partyAddress=e.state.partyAddress,a.partyDetails=e.state.partyDetails,a.intoleranceList=e.state.intoleranceList,a.dietList=e.state.dietList,a.addedGuests=e.state.addedGuests,a.photoURL=e.state.photoURL,a.recipes=e.state.recipes,N.a.database().ref("/Parties").push(a),e.setState({partyName:"",partyAddress:"",partyDetails:"",intoleranceList:[],dietList:[],addedGuests:[],recipes:[],guestsKeys:[],showGuestList:!1,photoURL:e.state.photoURL})}},e.toggleAddGuests=function(t){t.preventDefault(),e.setState({showGuestList:!e.state.showGuestList})},e.handleImageChange=function(t){console.log(t.target.files);var a=t.target.files;e.setState({files:a})},e.handleUploadImage=function(t){t.preventDefault();if(e.state.files[0]){var a=e.state.files[0];N.a.storage().ref("".concat("images","/").concat(a.name)).put(a).then((function(){N.a.storage().ref("".concat("images")).child(a.name).getDownloadURL().then((function(t){e.setState({photoURL:t})}))}))}},e.removeKey=function(t){var a=e.state.guestsKeys.filter((function(e){return e!==t}));e.setState({guestsKeys:a},(function(){e.convertKeys(),e.createIntolerancesList(),e.createDietList()}))},e.state={recipes:[],partyName:"",partyAddress:"",partyDetails:"",guestsKeys:[],addedGuests:[],dietList:[],intoleranceList:[],showGuestList:!1,photoURL:"https://media3.s-nbcnews.com/j/newscms/2019_05/2736521/190131-stock-taco-bar-food-ew-1220p_bc7c9fc25ecd393bfa3d7d35f216edfc.fit-1240w.jpg"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"createPartySection"},s.a.createElement("form",{className:"wrapper",action:""},s.a.createElement("h2",null,"Create a Party"),s.a.createElement("div",{className:"createPartyForm"},s.a.createElement("label",{htmlFor:"Name of Party"}),s.a.createElement("input",{type:"text",id:"partyName",value:this.state.partyName,onChange:this.updateState,name:"partyName",placeholder:"Party Name"}),s.a.createElement("label",{htmlFor:"Address"}),s.a.createElement("input",{type:"text",id:"partyAddress",value:this.state.partyAddress,onChange:this.updateState,name:"address",placeholder:"Address"}),s.a.createElement("label",{htmlFor:"Details"}),s.a.createElement("input",{type:"text",id:"partyDetails",value:this.state.partyDetails,onChange:this.updateState,name:"details",placeholder:"Date and Time"}),s.a.createElement("div",{className:"imageInput"},s.a.createElement("label",{htmlFor:"party image"}),s.a.createElement("input",{value:this.state.image,type:"file",onChange:function(t){e.handleImageChange(t)}}),s.a.createElement("button",{onClick:function(t){e.handleUploadImage(t)}},"Upload Image"))),s.a.createElement("div",{className:"addExistingGuests"},s.a.createElement("button",{className:"addGuests",type:"submit",onClick:function(t){return e.toggleAddGuests(t)}},"Add Existing Guests")),s.a.createElement("section",{className:"viewSection"},this.state.showGuestList?s.a.createElement(k,{getChoice:function(t){return e.getUserKey(t)}}):null),s.a.createElement("section",{className:"viewSection"},s.a.createElement("h3",null,"Added Guest List"),s.a.createElement("ul",{className:"viewUL"},this.state.addedGuests.map((function(t){return s.a.createElement("div",{className:"viewLIContainer"},s.a.createElement("li",{className:"viewLI",onClick:function(){return e.removeKey(t.key)}},s.a.createElement("span",{"aria-label":"close"},s.a.createElement("img",{className:"close",src:I.a,alt:""})),s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{className:"guestImg",src:t.photoURL,alt:t.name})),s.a.createElement("p",{className:"guestName"},t.name),s.a.createElement("p",null,t.email)))})))),s.a.createElement("section",{className:"dietsListSection"},s.a.createElement("h3",null,"Diet List"),s.a.createElement("ul",null,this.state.dietList.map((function(e){return s.a.createElement("li",null,s.a.createElement("p",null,e))})))),s.a.createElement("section",{className:"intoleranceListSection"},s.a.createElement("h3",null,"Intolerance List"),s.a.createElement("ul",null,this.state.intoleranceList.map((function(e){return s.a.createElement("li",null,s.a.createElement("p",null,e))}))),s.a.createElement("label",{htmlFor:"getRecipesButton"}),s.a.createElement("button",{id:"getRecipeButton",type:"submit",onClick:function(t){return e.getRecipes(t)}},"Get Recipes")),s.a.createElement("section",{className:"recipeGallerySection"},s.a.createElement("ul",{className:"recipeGalleryUL"},this.state.recipes.map((function(e){return s.a.createElement("li",{className:"recipeLI"},s.a.createElement("h4",{className:"recipeLink"},s.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.sourceUrl},e.title)),s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{className:"recipeImg",src:"https://spoonacular.com/recipeImages/".concat(e.id,"-","480x360",".","jpg"),alt:e.title})))})))),s.a.createElement("button",{id:"createParty",type:"submit",onClick:function(t){return e.submitParty(t)}},"Create Party")))}}]),a}(n.Component),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).syncGuests=function(){N.a.database().ref("/Guests").on("value",(function(t){var a=[],n=t.val();for(var s in n)a.push({guestInfo:n[s],guestID:s});e.setState({guests:a})}))},e.focusUser=function(t){e.setState({focusedUser:t.target.id})},e.state={guests:[{guestInfo:{name:"",email:"",photoURL:""}}],focusedUser:"key"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.syncGuests()}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"viewSection wrapper"},s.a.createElement("h2",null,"Guest List"),s.a.createElement("ul",{className:"viewUL"},this.state.guests.map((function(t){return s.a.createElement(m.b,{className:"viewLILink",key:"link"+t.guestID,to:"/guests/"+t.guestID},s.a.createElement("li",{key:t.guestID,className:"viewLI",id:t.guestID,onClick:function(t){return e.focusUser(t)}},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{className:"guestImg",src:t.guestInfo.photoURL,alt:"Profile pic of "+t.guestInfo.name})),s.a.createElement("h3",null,t.guestInfo.name)))}))))}}]),a}(n.Component),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).syncGuests=function(){N.a.database().ref("/Guests/"+e.props.match.params.id).on("value",(function(t){console.log(t.val()),e.setState({focusedUser:t.val()})}))},e.focusUser=function(t){e.setState({focusedUser:t.target.id})},e.state={focusedUser:{name:"",email:"",photoURL:""}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.syncGuests()}},{key:"render",value:function(){return s.a.createElement("section",{className:"viewGuestFocusSection wrapper"},s.a.createElement("div",{className:"profileCard"},s.a.createElement(m.b,{className:"link",activeClassName:"currentPage",to:"/guests"},"...go back"),s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{src:this.state.focusedUser.photoURL,alt:this.state.focusedUser.name+" profile picture"})),s.a.createElement("h2",null,this.state.focusedUser.name),s.a.createElement("p",null,this.state.focusedUser.email)))}}]),a}(n.Component),G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).syncParties=function(){N.a.database().ref("/Parties").on("value",(function(t){var a=[],n=t.val();for(var s in console.log(t.val()),n)a.push({partyInfo:n[s],partyID:s});e.setState({parties:a})}))},e.focusUser=function(t){e.setState({focusedParty:t.target.id})},e.state={parties:[{partyInfo:{addedGuests:[],dietList:[],intoleranceList:[],partyAddress:"",partyDetails:"",partyName:""}}],focusedParty:"key"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.syncParties()}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"viewSection wrapper"},s.a.createElement("h2",null,"Parties"),s.a.createElement("ul",{className:"viewUL"},this.state.parties.map((function(t){return s.a.createElement(m.b,{className:"viewLILink",key:"link"+t.partyID,to:"/viewParties/"+t.partyID},s.a.createElement("li",{key:t.partyID,className:"viewLI",id:t.partyID,onClick:function(t){return e.focusUser(t)}},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{src:t.partyInfo.photoURL,alt:t.partyInfo.partyDetails})),s.a.createElement("h3",null,t.partyInfo.partyName),s.a.createElement("p",null,t.partyInfo.partyAddress),s.a.createElement("p",null,t.partyInfo.partyDetails)))}))))}}]),a}(n.Component),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).syncParty=function(){N.a.database().ref("/Parties/"+e.props.match.params.id).on("value",(function(t){console.log(t.val()),e.setState({focusedParty:t.val()})}))},e.focusUser=function(t){e.setState({focusedUser:t.target.id})},e.state={focusedParty:{partyName:"",partyDetails:"",photoURL:"",dietList:[],intoleranceList:[],addedGuests:[],recipes:[]}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.syncParty()}},{key:"render",value:function(){return console.log(this.state.focusedParty),s.a.createElement("section",{className:"viewPartiesFocusSection wrapper"},s.a.createElement(m.b,{className:"link",activeClassName:"currentPage",to:"/viewParties"},"...go back"),s.a.createElement("div",{className:"profileCard"},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{src:this.state.focusedParty.photoURL,alt:this.state.focusedParty.partyDetails})),s.a.createElement("h2",null,this.state.focusedParty.partyName),s.a.createElement("p",null,this.state.focusedParty.partyDetails),s.a.createElement("div",{className:"guestList"},s.a.createElement("h3",null,"Guest List"),s.a.createElement("ul",{className:"guestListUL"},this.state.focusedParty.addedGuests.map((function(e){return s.a.createElement("li",{className:"guestLI"},s.a.createElement("p",null,e.name))})))),s.a.createElement("div",{className:"restrictionsList"},s.a.createElement("h3",null,"Warning! Be careful of the following:"),s.a.createElement("ul",{className:"dietListFocusUL"},this.state.focusedParty.dietList.map((function(e){return s.a.createElement("li",{className:"dietFocusLI"},s.a.createElement("p",null,e))}))),s.a.createElement("ul",{className:"intoleranceListFocusUL"},this.state.focusedParty.intoleranceList.map((function(e){return s.a.createElement("li",{className:"intoleranceFocusLI"},s.a.createElement("p",null,e))})))),s.a.createElement("section",{className:"recipeGallerySection"},s.a.createElement("h3",null,"Suggested Recipes"),s.a.createElement("ul",{className:"recipeGalleryUL"},this.state.focusedParty.recipes.map((function(e){return s.a.createElement("li",{className:"recipeLI"},s.a.createElement("h4",{className:"recipeLink"},s.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.sourceUrl},e.title)),s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{className:"recipeImg",src:"https://spoonacular.com/recipeImages/".concat(e.id,"-","480x360",".","jpg"),alt:e.title})))}))))))}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(m.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("nav",{className:"globalNav"},s.a.createElement("div",{className:"wrapper"},s.a.createElement(m.c,{exact:!0,className:"link",activeClassName:"currentPage",to:"/"},"Home"),s.a.createElement(m.c,{exact:!0,className:"link",activeClassName:"currentPage",to:"/createGuest"},"Create Guest"),s.a.createElement(m.c,{className:"link",activeClassName:"currentPage",to:"/createParty"},"Create Party"),s.a.createElement(m.c,{className:"link",activeClassName:"currentPage",to:"/viewParties"},"View Parties"),s.a.createElement(m.c,{className:"link",activeClassName:"currentPage",to:"/guests"},"View Guests"))),s.a.createElement(h.a,{exact:!0,path:"/",component:p}),s.a.createElement(h.a,{path:"/createGuest",component:E}),s.a.createElement(h.a,{path:"/createParty",component:F}),s.a.createElement(h.a,{exact:!0,path:"/guests",component:P}),s.a.createElement(h.a,{path:"/guests/:id",component:w}),s.a.createElement(h.a,{exact:!0,path:"/viewParties",component:G}),s.a.createElement(h.a,{path:"/viewParties/:id",component:U})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.165f9b9c.chunk.js.map