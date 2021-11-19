import css from './LikeDislike.module.css'
import {useEffect, useReducer, useState} from "react";

const initValues = [
    {type: 'like', count: 12, isClicked: false},
    {type: 'dislike', count: 2, isClicked: false}
]
function likesReducer(votes, action){
    switch (action.type){
        case 'like':
            return votes.map(item =>{
                if (item.type === 'like' && item.isClicked === false) return {...item, count: item.count + 1, isClicked: true}
                if (item.type === 'dislike' && item.isClicked === true) return {...item, count: item.count - 1,isClicked: false}
                return item
            })
        case 'dislike':
            return votes.map(item =>{
                if (item.type === 'dislike' && item.isClicked === false) return {...item, count: item.count + 1, isClicked: true}
                if (item.type === 'like' && item.isClicked === true) return {...item, count: item.count - 1,isClicked: false}
                return item
            })
    }

}

function LikeDislike(){
    const [votes, dispatch] = useReducer(likesReducer, initValues)
    const [likeObj, setLikeObj] = useState({})
    const [dislikeObj, setDislikeObj] = useState({})

    useEffect(() =>{
        const likeObj = votes.find(item =>{
            if (item.type === 'like') return item.count
        })
        const dislikeObj = votes.find(item =>{
            if (item.type === 'dislike') return item.count
        })
        setLikeObj(likeObj)
        setDislikeObj(dislikeObj)
    },[votes])
    const onLike = () =>{
        console.log()
        dispatch({type: 'like'})
    }
    const onDislike = () =>{
        dispatch({type: 'dislike'})
    }
    return (
        <div className={css['main-div']}>
            <span>
                {likeObj.isClicked && <i onClick={onLike} className="fa fa-thumbs-up" aria-hidden="true"/>}
                {!likeObj.isClicked && <i onClick={onLike} className="fa fa-thumbs-o-up" aria-hidden="true"/>}
                {likeObj.count}</span>
            <span>
                {dislikeObj.isClicked && <i onClick={onDislike} className="fa fa-thumbs-down" aria-hidden="true"/>}
                {!dislikeObj.isClicked && <i onClick={onDislike} className="fa fa-thumbs-o-down" aria-hidden="true"/>}
                {dislikeObj.count}</span>

        </div>
    )
}

export default LikeDislike