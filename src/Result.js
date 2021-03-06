import React, { Component } from 'react';
import "./LandingPage.css";
import biryani from './biriyani.png';
import {Link} from 'react-router-dom';
import Icon from 'react-icons-kit';
import {ic_grade} from 'react-icons-kit/md/ic_grade';
import {ic_chat_bubble} from 'react-icons-kit/md/ic_chat_bubble';
import {ic_sentiment_satisfied} from 'react-icons-kit/md/ic_sentiment_satisfied';
import shop from './shop.png';

export default class Result extends Component{

state={
imgs:[
{id:1,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:2,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:3,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:4,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:5,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:6,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:7,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:8,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
{id:9,title:"food", desc:"Hyderabadi Chicken Biryani", src1:biryani},
]};

	render(){

		return(
			<div> 

					{this.state.imgs.map(imgs=>(
						<div className="col-md-4" key={imgs.id}>
							<div className="card p-2 mb-4" style={{width:'280px'}}>
							<Link to="/RestaurantPage"><img src={imgs.src1} alt={imgs.title} width={150} height={150} className="card-img-top"/></Link>
							<div className="card-body">
							<p className="clearfix mb-0">
								<span className="card-title float-left mb-0 pt-2" style={{fontSize:'1.5em'}}>{imgs.desc}</span>
								<span className="float-right">
								<span className="p-2 bg-success text-white font-weight-bold float-left rounded"><Icon icon={ic_grade} className="float-left mr-1"/><span style={{fontSize:'1.2em'}}>5.0</span></span>

								</span>
							</p>
							<p className="clearfix mb-1">
								<span className="float-left" style={{fontSize:'1.5em',marginTop:'-3px'}}>with Raita</span>
								<span className="float-right">
								<span className="float-left"><Icon icon={ic_chat_bubble} className="text-success float-left mr-1" size={27}/><Icon icon={ic_sentiment_satisfied} className="text-white" style={{marginLeft:'-24px',marginTop:'3px'}}/><span className="ml-2">13</span></span>
								</span>
							</p>
							<div className="clearfix mb-1">
								<span className="float-left">South Indian Biryani</span>
								<div className="float-right">
								<div style={{clear:'both'}}><div className="border border-danger d-inline-block" style={{padding:'2px'}}><div className="bg-danger" style={{width:'7px',height:'7px',borderRadius:'50%'}}></div></div></div>	
								</div>
							</div>
							<p className="clearfix mb-1">
								<span className="float-left mt-2"><img src={shop} alt="ShopIcon"/>Biryani Paradise, Willson Garden</span>
								<span className="float-right"><span className="text-success font-weight-bold" style={{fontSize:'1.8em'}}>&#8377;220</span></span>
							</p>
							</div>
							</div>
						</div>))}
					
		        </div>
		);
	}
}
