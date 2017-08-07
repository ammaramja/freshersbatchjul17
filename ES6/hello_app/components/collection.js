export function collection()
{
    let users_sports = new Set();
    let users_music = new Set();

    users_sports.add("Ammar");
    users_sports.add("Arwa");
    users_sports.add("third A");

    users_music.add("basit");
    users_music.add("anusha");
    users_music.add("hybrid");

    let messages_music = ["asdfaf","asdgafgfg","xvchsbvje"];
    let messages_sports = ["sports_msg1","2","3"];

    let sports_map_user = new Map();
    sports_map_user.set('username',users_sports);
    sports_map_user.set('messages',messages_sports);
    
    let music_map_user = new Map();
    music_map_user.set('username',users_music);
    music_map_user.set('messages',messages_music);

    function get_users(chatroom)
    {
        if (chatroom==='music')
        {
            return music_map_user.get('username');            
        }

        if (chatroom==='sports')
        {
            return sports_map_user.get('username');            
        }
    }
    function get_messages(chatroom)
    {
        if (chatroom==='music')
        {
            return music_map_user.get('messages');            
        }

        if (chatroom==='sports')
        {
            return sports_map_user.get('messages');            
        }
    }

    console.log(get_users('music'));
    console.log(get_users('sports'));
    console.log(get_messages('music'));
    console.log(get_messages('sports'));

}