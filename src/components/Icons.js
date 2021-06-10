const Style={
    
    FavoritesIcon:{
        float:"right",
        marginTop:6
    },

    SearchIcon:{
        float:"right",
        marginRight:14
    },

    DropDownIcon:{
        float:"right",
        marginTop:10
    }
}



export const FavoritesIcon=()=>{
    return <svg style={Style.FavoritesIcon} width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 17.7917L11.55 16.6917C6.4 12.8 3 10.2333 3 7.08333C3 4.51667 5.42 2.5 8.5 2.5C10.24 2.5 11.91 3.175 13 4.24167C14.09 3.175 15.76 2.5 17.5 2.5C20.58 2.5 23 4.51667 23 7.08333C23 10.2333 19.6 12.8 14.45 16.7L13 17.7917Z"
     fill="#E5E5E5" fill-opacity="0.7"/>
    </svg>
    
}


export const SearchIcon=()=>{
    return <svg style={Style.SearchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
     fill="#E5E5E5" fill-opacity="0.7"/>
    </svg>
    
    
}

export const DropDownIcon=()=>{
    return <svg style={Style.DropDownIcon} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5047 9.23593L0.0579774 0.443021L16.5043 0.0343848L8.5047 9.23593Z" fill="#C4C4C4"/>
    </svg>
    
    
    
}