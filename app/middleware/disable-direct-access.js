export default function({ from, route, redirect }){
    if(from.path === route.path && from.path !== '/works'){
        redirect('/works');
    }
}