import './index.css'
const Items = (props) => {

    const { details, DeleteFun } = props
    const { title, url, id } = details

    const deleteHandle = () => {
        DeleteFun(id)
    }

    return (
        <div>
            <ul className="item-container">
                <li className='title'>{title}</li>
                <li><img src={url} alt="dax" className='img' /></li>
                {/* <li><img src={props.item.thumbnailUrl} alt = "dax"/></li> */}
                <button className='bt' onClick={deleteHandle}>Delete</button>
            </ul>
        </div>
    );    
};


export default Items;