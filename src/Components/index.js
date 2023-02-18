import React, {useState, useEffect} from 'react';
import {Button, Card} from 'react-bootstrap';

export default function Index() {
    let cardList = [];

    let [list, listHandle] = useState([]);
    let [load, loadHandle] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                if(!res.ok){
                    throw Error("Not Response!");
                }else{ 
                    return res.json();
                }
            })
            .then((data) => {
                loadHandle(false);
                listHandle(data);
            })
            .catch((err) => {

            })
        }, 2000);
    },[]);
    cardList = list.map((singleData) =>
                <Card className='' key={singleData.id}>
                    <Card.Body>
                        <Card.Title>{singleData.title}</Card.Title>
                        <Card.Text>{singleData.body}</Card.Text>
                        <div>
                            <Button>See More</Button>
                            <Button variant='danger ms-3 '>Report</Button>
                        </div>
                    </Card.Body>
                </Card>
            )
    
  return (
    <div className='card-wrapper'>
        {load && <h5 className='text-center'>Loading Data</h5>}
        {cardList}
    </div>
  )
}
