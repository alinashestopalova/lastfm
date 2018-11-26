import React from "react"
import AlbumCard from "../AlbumCard/AlbumCard"
import ArtistCard from "../AlbumCard/AlbumCard"
import TrackCardFullSize from "../TrackCardFullSize/TrackCardFullSize"
import TrackCardHalfSize from "../TrackCardHalfSize/TrackCardHalfSize"

const List = (props) =>{
    return (
        <>
            {props.list.map((item)=>{
                let listItem = null
                switch(props.children.type.name){
                    case "AlbumCard":
                        listItem = <AlbumCard
                            link= {item.link}
                            title= {item.title}
                        />
                        break
                    case "ArtistCard":
                        listItem = <ArtistCard
                            link= {item.link}
                            title= {item.title}
                        />
                        break
                    case "TrackCardFullSize":
                        listItem = <TrackCardFullSize
                            link={item.link}
                            title={item.title}
                            name={item.name}
                            trackStyle={item.trackStyle}
                        />
                        break
                    case "TrackCardHalfSize":
                        listItem = <TrackCardHalfSize
                            link={item.link}
                            title={item.title}
                            name={item.name}
                            trackStyle={item.trackStyle}
                        />
                        break
                }
                return listItem
            })}
        </>
    )
}

export default List