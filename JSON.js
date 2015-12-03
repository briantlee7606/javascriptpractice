
var j = {
   "roomId":"319",
   "permittedEntitiesWithPermissions":[
      {
         "revokePermissions":false,
         "permittedEntity":{
            "name":null,
            "entityType":"GROUP",
            "address":"Lau-00537000000NQ7tAAG-Contributor"
         },
         "permissions":{
            "watermark":false,
            "spotlight":false,
            "progAccess":true,
            "print":true,
            "neverExpires":true,
            "expirationDate":null,
            "edit":true,
            "downloadOriginal":true,
            "download":true,
            "defaultExpirationDays":null,
            "copy":true
         },
         "isDefault":true
      }
   ],
   "folderPathsOrIds":[
      {
         "folderGuid":"da15509d-3305-42fc-947e-ac14b4c2f975"
      }
   ]
}

console.log("Room ID is: " + j.roomId);
console.log("Revoke permissions is: " + j.permittedEntitiesWithPermissions[0].revokePermissions);
console.log("Address is: " + j.permittedEntitiesWithPermissions[0].permittedEntity.address);
console.log("Watermark is: " + j.permittedEntitiesWithPermissions[0].permissions.watermark);
console.log("Folder GUID is: " + j.folderPathsOrIds[0].folderGuid);
console.log("Is default is: " + j.permittedEntitiesWithPermissions[0].isDefault);
