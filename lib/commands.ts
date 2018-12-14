interface CommandParam {
    key: string;
    value: string;
}

export interface CommandDefinition {
    description?: string;
    params?: CommandParam[]
    callback?: Function
}
export interface TeamSpeakCommand {
    readonly [command:string]: CommandDefinition
}

export interface TeamSpeakCommands {
    "banadd": {
        "description": "create a ban rule"
    },
    "banclient": {
        "description": "ban a client"
    },
    "bandel": {
        "description": "delete a ban rule"
    },
    "bandelall": {
        "description": "delete all ban rules"
    },
    "banlist": {
        "description": "list ban rules on a virtual server"
    },
    "bindinglist": {
        "description": "list IP addresses used by the server instance"
    },
    "channeladdperm": {
        "description": "assign permission to channel"
    },
    "channelclientaddperm": {
        "description": "assign permission to channel-client combi"
    },
    "channelclientdelperm": {
        "description": "remove permission from channel-client combi"
    },
    "channelclientpermlist": {
        "description": "list channel-client specific permissions"
    },
    "channelcreate": {
        "description": "create a channel"
    },
    "channeldelete": {
        "description": "delete a channel"
    },
    "channeldelperm": {
        "description": "remove permission from channel"
    },
    "channeledit": {
        "description": "change channel properties"
    },
    "channelfind": {
        "description": "find channel by name"
    },
    "channelgroupadd": {
        "description": "create a channel group"
    },
    "channelgroupaddperm": {
        "description": "assign permission to channel group"
    },
    "channelgroupclientlist": {
        "description": "find channel groups by client ID"
    },
    "channelgroupcopy": {
        "description": "copy a channel group"
    },
    "channelgroupdel": {
        "description": "delete a channel group"
    },
    "channelgroupdelperm": {
        "description": "remove permission from channel group"
    },
    "channelgrouplist": {
        "description": "list channel groups"
    },
    "channelgrouppermlist": {
        "description": "list channel group permissions"
    },
    "channelgrouprename": {
        "description": "rename a channel group"
    },
    "channelinfo": {
        "description": "display channel properties"
    },
    "channellist": {
        "description": "list channels on a virtual server"
    },
    "channelmove": {
        "description": "move channel to new parent"
    },
    "channelpermlist": {
        "description": "list channel specific permissions"
    },
    "clientaddperm": {
        "description": "assign permission to client"
    },
    "clientdbdelete": {
        "description": "delete client database properties"
    },
    "clientdbedit": {
        "description": "change client database properties"
    },
    "clientdbfind": {
        "description": "find client database ID by nickname or UID"
    },
    "clientdbinfo": {
        "description": "display client database properties"
    },
    "clientdblist": {
        "description": "list known client UIDs"
    },
    "clientdelperm": {
        "description": "remove permission from client"
    },
    "clientedit": {
        "description": "change client properties"
    },
    "clientfind": {
        "description": "find client by nickname"
    },
    "clientgetdbidfromuid": {
        "description": "find client database ID by UID"
    },
    "clientgetids": {
        "description": "find client IDs by UID"
    },
    "clientgetnamefromdbid": {
        "description": "find client nickname by database ID"
    },
    "clientgetnamefromuid": {
        "description": "find client nickname by UID"
    },
    "clientgetuidfromclid": {
        "description": "find client UID by client ID"
    },
    "clientinfo": {
        "description": "display client properties",
        "params": [
            {
                "key": "clid",
                "value": "client_id"
            }
        ]
    },
    "clientkick": {
        "description": "kick a client"
    },
    "clientlist": {
        "description": "list clients online on a virtual server"
    },
    "clientmove": {
        "description": "move a client"
    },
    "clientpermlist": {
        "description": "list client specific permissions"
    },
    "clientpoke": {
        "description": "poke a client"
    },
    "clientsetserverquerylogin": {
        "description": "set own login credentials"
    },
    "clientupdate": {
        "description": "set own properties"
    },
    "complainadd": {
        "description": "create a client complaint"
    },
    "complaindel": {
        "description": "delete a client complaint"
    },
    "complaindelall": {
        "description": "delete all client complaints"
    },
    "complainlist": {
        "description": "list client complaints on a virtual server"
    },
    "custominfo": {
        "description": "display custom client properties"
    },
    "customsearch": {
        "description": "search for custom client properties"
    },
    "customset": {
        "description": "add or update a custom client property."
    },
    "customdelete": {
        "description": "remove a custom client property."
    },
    "ftcreatedir": {
        "description": "create a directory"
    },
    "ftdeletefile": {
        "description": "delete a file"
    },
    "ftgetfileinfo": {
        "description": "display details about a file"
    },
    "ftgetfilelist": {
        "description": "list files stored in a channel filebase"
    },
    "ftinitdownload": {
        "description": "init a file download"
    },
    "ftinitupload": {
        "description": "init a file upload"
    },
    "ftlist": {
        "description": "list active file transfers"
    },
    "ftrenamefile": {
        "description": "rename a file"
    },
    "ftstop": {
        "description": "stop a file transfer"
    },
    "gm": {
        "description": "send global text message"
    },
    "help": {
        "description": "read help files"
    },
    "hostinfo": {
        "description": "display server instance connection info"
    },
    "instanceedit": {
        "description": "change server instance properties"
    },
    "instanceinfo": {
        "description": "display server instance properties"
    },
    "logadd": {
        "description": "add custom entry to log"
    },
    "login": {
        "description": "authenticate with the server"
    },
    "logout": {
        "description": "deselect virtual server and log out"
    },
    "logview": {
        "description": "list recent log entries"
    },
    "messageadd": {
        "description": "send an offline message"
    },
    "messagedel": {
        "description": "delete an offline message from your inbox"
    },
    "messageget": {
        "description": "display an offline message from your inbox"
    },
    "messagelist": {
        "description": "list offline messages from your inbox"
    },
    "messageupdateflag": {
        "description": "mark an offline message as read"
    },
    "permfind": {
        "description": "find permission assignments by ID"
    },
    "permget": {
        "description": "display client permission value for yourself"
    },
    "permidgetbyname": {
        "description": "find permission ID by name"
    },
    "permissionlist": {
        "description": "list permissions available"
    },
    "permoverview": {
        "description": "display client permission overview"
    },
    "permreset": {
        "description": "delete all server and channel groups and restore default permissions"
    },
    "privilegekeyadd": {
        "description": "creates a new privilege key"
    },
    "privilegekeydelete": {
        "description": "delete an existing privilege key"
    },
    "privilegekeylist": {
        "description": "list all existing privilege keys on this server"
    },
    "privilegekeyuse": {
        "description": "use a privilege key"
    },
    "quit": {
        "description": "close connection"
    },
    "sendtextmessage": {
        "description": "send text message"
    },
    "servercreate": {
        "description": "create a virtual server"
    },
    "serverdelete": {
        "description": "delete a virtual server"
    },
    "serveredit": {
        "description": "change virtual server properties"
    },
    "servergroupadd": {
        "description": "create a server group"
    },
    "servergroupaddclient": {
        "description": "add client to server group"
    },
    "servergroupaddperm": {
        "description": "assign permissions to server group"
    },
    "servergroupautoaddperm": {
        "description": "globally assign permissions to server groups"
    },
    "servergroupautodelperm": {
        "description": "globally remove permissions from server group"
    },
    "servergroupclientlist": {
        "description": "list clients in a server group"
    },
    "servergroupcopy": {
        "description": "create a copy of an existing server group"
    },
    "servergroupdel": {
        "description": "delete a server group"
    },
    "servergroupdelclient": {
        "description": "remove client from server group"
    },
    "servergroupdelperm": {
        "description": "remove permissions from server group"
    },
    "servergrouplist": {
        "description": "list server groups"
    },
    "servergrouppermlist": {
        "description": "list server group permissions"
    },
    "servergrouprename": {
        "description": "rename a server group"
    },
    "servergroupsbyclientid": {
        "description": "get all server groups of specified client"
    },
    "serveridgetbyport": {
        "description": "find database ID by virtual server port"
    },
    "serverinfo": {
        "description": "display virtual server properties"
    },
    "serverlist": {
        "description": "list virtual servers"
    },
    "servernotifyregister": {
        "description": "register for event notifications"
    },
    "servernotifyunregister": {
        "description": "unregister from event notifications"
    },
    "serverprocessstop": {
        "description": "shutdown server process"
    },
    "serverrequestconnectioninfo": {
        "description": "display virtual server connection info"
    },
    "serversnapshotcreate": {
        "description": "create snapshot of a virtual server"
    },
    "serversnapshotdeploy": {
        "description": "deploy snapshot of a virtual server"
    },
    "serverstart": {
        "description": "start a virtual server"
    },
    "serverstop": {
        "description": "stop a virtual server"
    },
    "servertemppasswordadd": {
        "description": "create a new temporary server password"
    },
    "servertemppassworddel": {
        "description": "delete an existing temporary server password"
    },
    "servertemppasswordlist": {
        "description": "list all existing temporary server passwords"
    },
    "setclientchannelgroup": {
        "description": "set a clients channel group"
    },
    "tokenadd": {
        "description": "alias for privilegekeyadd"
    },
    "tokendelete": {
        "description": "alias for privilegekeydelete"
    },
    "tokenlist": {
        "description": "alias for privilegekeylist"
    },
    "tokenuse": {
        "description": "alias for privilegekeyuse"
    },
    "use": {
        "description": "select virtual server"
    },
    "version": {
        "description": "display version information"
    },
    "whoami": {
        "description": "display current session info"
    }
};


export default TeamSpeakCommands;
