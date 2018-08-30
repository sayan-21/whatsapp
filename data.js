let recentChat=[{
	"ID":"p1",
	"Name":"Ayush",
	"phone_number":"+91 9987452146",
	"profile_picture":"images/profile-picture/contact1.jpg",
	"phone_contact":"no",
	"last_seen":""
},{
	"ID":"p2",
	"Name":"Sachin",
	"phone_number":"+91 8745410743",
	"profile_picture":"images/profile-picture/contact2.png",
	"phone_contact":"yes",
	"last_seen":""
},{
	"ID":"p3",
	"Name":"Manish",
	"phone_number":"+91 9871254036",
	"profile_picture":"images/profile-picture/contact3.jpg",
	"phone_contact":"yes",
	"last_seen":""
},{
	"ID":"grp1",
	"Name":"School Mates",
	"profile_picture":"images/profile-picture/group1.jpg",
	"members":['p1','p3','p2']
},{
	"ID":"grp2",
	"Name":"Work Time",
	"profile_picture":"images/profile-picture/group2.png",
	"members":['p1','p2']
}]
let chat=[{
	"user_id":"p1",
	"messages":[{
		"status":1,
		"message":"How are you???",
		"time":"4:15 A.M",
		"date":"21/04/2018",
		"read_status":1
	},{
		"status":2,
		"message":"I am fine",
		"time":"4:16 A.M",
		"date":"21/04/2018",
		"read_status":0
	},{
		"status":1,
		"message":"When are you coming?",
		"time":"9:20 P.M",
		"date":"21/04/2018",
		"read_status":1
	}]
},{
	"user_id":"p2",
	"messages":[{
		"status":2,
		"message":"Are you there??",
		"time":"9:10 P.M",
		"date":"01/03/2018",
		"read_status":0
	}]
},{
	"user_id":"p3",
	"messages":[{
		"status":1,
		"message":"Hi. I am Sayan",
		"time":"9:22 A.M",
		"date":"21/02/2018",
		"read_status":0
	}]
},{
	"user_id":"grp1",
	"messages":[{
		"status":1,
		"message":"Anyone there?",
		"time":"5:15 A.M",
		"date":"20/02/2018",
		"read_status":1,
	},{
		"status":2,
		"message":"Yes say...",
		"time":"5:16 A.M",
		"date":"20/02/2018",
		"sender_id":"p2",
		"read_status":1
	},{
		"status":2,
		"message":"Is everyone coming tomorrow?",
		"time":"5:19 A.M",
		"date":"20/02/2018",
		"sender_id":"p1",
		"read_status":0
	}]
},{
	"user_id":"grp2",
	"messages":[{
		"status":2,
		"message":"There is a meeting tomorrow from 12:30",
		"time":"8:20 P.M",
		"date":"19/02/2018",
		"sender_id":"p3",
		"read_status":0
	}]
}]