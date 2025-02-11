import React, { Component } from 'react';
import {Row,Container,Col} from 'react-materialize';
import TeamConfluCards from './TeamConfluCards';
import anime from './anime.es';

class TeamConflu extends Component {
    state = {
        team : {
            "success":true,
            "message":"Giving Team Conflu",
            "request":{"Method":"GET","URI":"/api/teamConflu/","Params":null},
            "data":[
                {"name":"abc", "members":[{"name":"def","profilePic":"https://ui-avatars.com/api/?size=216&name=User","fbID":"","githubID":"","email":"abc@gmail.com","mobileNo":""},{"name":"cdef","profilePic":"https://ui-avatars.com/api/?size=216&name=User","fbID":"","githubID":"","email":"abc@zmail.com","mobileNo":""}]},
             	{"name":"hospitality","members":[{"name":"abc","profilePic":"https://ui-avatars.com/api/?size=216&name=User","fbID":"","githubID":"","email":"abc@gmail.com","mobileNo":""},{"name":"koi hai","profilePic":"https://ui-avatars.com/api/?size=216&name=User","fbID":"","githubID":"","email":"are hai bhai","mobileNo":"kuch hai"},{"name":"Shubham","profilePic":"https://ui-avatars.com/api/?size=216&name=User","fbID":"","githubID":"","email":"goyal","mobileNo":"9053392128"}]},
                {"name":"photography","members":[{"name":"xyz","profilePic":"https://ui-avatars.com/api/?size=216&name=User","fbID":"","githubID":"","email":"xyz","mobileNo":""}]}
            ]
        }   
    }

	render() {
        if(this.state.team.length === 0){
            return (
                <React.Fragment></React.Fragment>
            )
		}
		
		const data = [], temp = this.state.team.data.map(role => role.members),
		temp2 = temp.forEach(members => {
			members.forEach(member => {
				data.push(member);
			});
		});

		const columns = data.map( (member,i) =>{
			return (
				<Col l={4} m={4} s={12}>
                	<TeamConfluCards memberName={member.name} imgUrl={member.profilePic} i= {i}/>
            	</Col>
			)
		})
		
		return (
			<div className="confluTeamBody">
				<center>	
					<h1>Our Team</h1>
				</center>
				<Container>
					<Row>
						{columns}
					</Row>
				</Container>
			</div>
		);
	}
}

export default TeamConflu;
	
