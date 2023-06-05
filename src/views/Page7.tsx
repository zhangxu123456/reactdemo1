import {useState} from 'react'
import Page6 from "./Page6"
import Jing from '@/components/Comp3/Jing'
import Game from '@/components/Comp3/Jing2'
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product => {
    return (
        <li key={product.id} style={{color:product.isFruit ? 'zx' : 'xu'}}>{product.title}</li>
    )
})

const Page7 = () => {
    let content;
    const isLogin = 6
    const [count,setCount] = useState(0)
    const handleClik = () => {
        setCount(count + 1)
    }
    if (isLogin > 5) {
        content = <Page6 count={count} />
    } else {
        content = 4
    }
    return (
        <div>
            <Game/>
            <Jing/>
            <h1 onClick={handleClik}>{user.name}</h1>
            <img src={user.imageUrl} alt={`'photo of'${user.name}`} style={{ width: user.imageSize, height: user.imageSize }} />
            {
                isLogin > 5 ? (<Page6 count={count} />) : '123'
            }
            {isLogin > 5 && <Page6 count={count} />}
            <ul>{listItems}</ul>
        </div>
    )
}

export default Page7