import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';



class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectdish: null
        };
    }

    onDishSelect(dish) {
          
        this.setState({  selectdish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg className='col-12 col-md-6 mt-4' height='30%' src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className='col-12 col-md-4 mt-3'>
                    <Card key={dish.id} 
                    onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}>

                        </CardImg>

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>

                    </Card>

                   

                </div >

            );

    })

    return(
            <div className = 'container' >

            <div className='row'>

                {menu}
            </div>
            <div className='row'>
                <div classname='col-12 col-md-6 m-1'>
                {this.renderDish(this.state.selectdish)}
                </div>
           

            </div>

            </div>

        );
    }
}

export default Menu;