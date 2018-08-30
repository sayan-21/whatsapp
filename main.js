let showchat=(user_id)=>{
	if(screen.width<=767){
		document.getElementById("overlay").style.display = "block"
		let ht=document.getElementById("chat_box").innerHTML
		document.getElementById("overlay").innerHTML=ht
		document.getElementById("profile_name").style.fontSize="70%"
	}
	else{
		let temp=document.getElementById('back_button')
		temp.classList.remove("fa-arrow-left")
		document.getElementById('chat_box').style.display="block"
	}
		generateOldMessage(user_id)
		loadNavbarDetails(user_id)
}
let generateRecentlyContactedList=()=>{
	let html_recent_chat=''
	let isGroup,t,lastMessage
	let deliver_symbol,unread_symbol,groupSender_last
	for(let i=0;i<recentChat.length;i++){
		let name=''
		isGroup=false
		t="",lastMessage="",deliver_symbol="",unread_symbol="",groupSender_last=""
		if((recentChat[i].ID).startsWith("grp")){
			name=recentChat[i].Name
			isGroup=true
		}
		else{
				
			if(recentChat[i].phone_contact==="yes" )
				name=recentChat[i].Name
			else
				name=recentChat[i].phone_number
		}
		//get the last message and time
		for(let j=0;j<chat.length;j++){
			if(chat[j].user_id===recentChat[i].ID){ 
				let len=chat[j].messages.length
				t=chat[j].messages[len-1].date
				lastMessage=chat[j].messages[len-1].message
				if(chat[j].user_id.startsWith("grp") && chat[j].messages[len-1].status==2)
				groupSender_last=getSender( chat[j].messages[len-1].sender_id)+": "
				//set the read symbol according to read status
				if(chat[j].messages[len-1].status==1){
					if(chat[j].messages[len-1].read_status==1)
						deliver_symbol="fas fa-check-circle"
					else
						deliver_symbol="far fa-check-circle"
				}
				if(chat[j].messages[len-1].status==2 && chat[j].messages[len-1].read_status==0)
					unread_symbol="font-weight-bold"
				else
					unread_symbol=""
				break
			}
		}
		
		html_recent_chat +=`
		<div class="chat_list row container-full" onclick="showchat('${recentChat[i].ID}')">
					<div class="col-md-2 col-sm-2 col-2 contact-picture" style="padding: 5px">
						<img src="${recentChat[i].profile_picture}" width="50" height="50" style="border-radius: 50%;">
					</div>
					<div class="col-md-10 col-sm-10 col-10 message-preview">
						<div class="row">
							<div class="col-md-8 col-sm-8 col-8">
								${name}
							</div>
							<div class="col-md-4 col-sm-4 col-4 text-right recent_last_time" style="overflow:hidden">
								${t}
							</div>
						</div>
						<div class="msg" ><small id="${recentChat[i].ID}" class="${recentChat[i].ID} ${unread_symbol}"><i class="${deliver_symbol}"></i>${groupSender_last}${lastMessage}</small></div>
					</div>
				</div>
		`
	}
	document.getElementById('recentChatList').innerHTML=html_recent_chat
}
let generateOldMessage=(user_id)=>{
	let html_message=""
	let deliver_symbol=""
	let group_sender_info=""
	let element = document.getElementById(user_id);
	if($("div .msg small").hasClass(user_id))
	{
   		element.classList.remove("font-weight-bold");
	}
	for(let i=0;i<chat.length;i++){ 
		if(user_id===chat[i].user_id){ 
			for(let j=0;j<chat[i].messages.length;j++){ 
				if(chat[i].messages[j].status==1){
					//read_status 1:message read; 0: not read
					if(chat[i].messages[j].read_status==1)
						deliver_symbol="fas fa-check-circle"
					else
						deliver_symbol="far fa-check-circle"
				}
				else{
					deliver_symbol=""
					if(user_id.startsWith("grp"))
					group_sender_info='<small style="color:blue;font-weight:bold">'+getSender(chat[i].messages[j].sender_id)+'</small><br>'
				}
				
				html_message +=`
					<div  class="d-flex ${(chat[i].messages[j].status == 1)? "justify-content-end":"justify-content-start"}">
					<span class="" style="border-radius:5px;min-width:250px;background-color: white; padding: 7px;margin: 10px">${group_sender_info} ${chat[i].messages[j].message}
					<div class="text-right" style="font-size:.8rem"><small>${chat[i].messages[j].time}<i class="${deliver_symbol}"></i></small></div></span></div>
					`
				 // console.log(html_message)
			}
			break;
		}
		
	}
	document.getElementById('message').innerHTML=html_message
}
let getSender=(user_id)=>{
	for(let i=0;i<recentChat.length;i++){
		if(recentChat[i].ID===user_id){
			if(recentChat[i].phone_contact==="yes")
				return( recentChat[i].Name)
			else
				return(recentChat[i].phone_number)
		}
	}
}
let loadNavbarDetails=(user_id)=>{
	let profile_picture=''
	let profile_name=''
	for(let i=0;i<recentChat.length;i++){
		if(user_id===recentChat[i].ID){
			image_location=recentChat[i].profile_picture
			if(user_id.startsWith("grp"))
				profile_name=recentChat[i].Name	
			else if(recentChat[i].phone_contact==='yes')
				profile_name=recentChat[i].Name
			else
				profile_name=recentChat[i].phone_number
			break
		}
	}
	document.getElementById('chat_navbar_image').src=image_location
	document.getElementById('profile_name').innerHTML=profile_name
}
let remove_overlay=()=>{
	document.getElementById("overlay").style.display = "none";
}
let open_profile_view=()=>{
	chat_html=document.getElementById("chat_list").innerHTML
	let ht=document.getElementById("profile_pic_view").innerHTML
	document.getElementById("chat_list").innerHTML=ht
}
let hideProfileSettings=()=>{
	document.getElementById("chat_list").innerHTML=chat_html
}
let upload_photo=()=>{
	document.getElementById("display_photo_upload").click()
}
generateRecentlyContactedList()
let chat_html="";
