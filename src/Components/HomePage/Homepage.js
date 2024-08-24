import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Homepage.css";
// /Users/rahul/Desktop/pollingbooth/src/CssComponents
import { Card, Button,Row,Col,Form ,InputGroup,ProgressBar,Container} from "react-bootstrap";
import Polllist from "./Polllist";
import AddPoll from "./AddPoll";
import Pollresults from "./Pollresults";
import Userdetails from "./Userdetails";
// import logo from './src/images/logo.png';


function Homepage() {
 let [page,setPage]=useState('Polllist')
 let [polls, setPolls] = useState([]);


 // Function to handle page navigation
 let handlePageClick=(component)=>{
  setPage(component)
 }
 // Function to add a new poll to the poll list
 let addNewPoll = (newPoll) => {
  setPolls([...polls, newPoll]);
  setPage('Polllist'); // Navigate to Polllist after adding a poll
};


 return (
    <div className="polling-booth">
      <header>
        <h1>POLLING BOOTH</h1>
        <input type="text" placeholder="Search" />
        <div className="user-info">
          <h4>
            Welcome! User <i class="bi bi-person-circle"></i>
          </h4>
        </div>
      </header>
      <div className="container">
        <aside>
          <nav>
            <ul>
              <li onClick={()=>handlePageClick('Polllist')}>
                <i class="bi bi-list"  > </i>Poll List
              </li>
              <li onClick={()=>handlePageClick('AddPoll')}>
                <i class="bi bi-plus-circle"> </i> Add Poll
              </li>
              <li onClick={()=>handlePageClick('Pollresults')}>
                <i class="bi bi-check2-circle"></i> Voted Polls
              </li>
              <li onClick={()=>handlePageClick('Userdetails')}>
                <i class="bi bi-person-circle"></i> User Details
              </li>
            </ul>
          </nav>
          <div className="categories">
            <h4>CATEGORIES</h4>
            <nav>
              <button>Entertainment</button>
              <button>Travel</button>
              <button>Education</button>
              <button>Politics</button>
              <button>Research</button>
              <button>Medicine</button>
              <button>Automation</button>
              <button>Sports</button>
              <button>Education</button>
              <button>Politics</button>
              <button>Research</button>
              <button>Medicine</button>
              {/* Add more categories here */}
            </nav>
            <button className="sign-out">
              Sign Out <i class="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </aside>
        <main>
          <nav>
       
{/* 
          {page === 'Polllist' && <Polllist />}
      {page === 'AddPoll' && <AddPoll />}
      {page === 'Pollresults' && <Pollresults />}
      {page === 'Userdetails' && <Userdetails/>}
 */}

      {page === 'Polllist' && <Polllist polls={polls} />}
            {page === 'AddPoll' && <AddPoll addNewPoll={addNewPoll} />}
            {page === 'Pollresults' && <Pollresults />}
            {page === 'Userdetails' && <Userdetails />}

         
{/*THIS IS THE FINAL CODE FOR POLE LISTS PAGE */}
 
            {/* <Card>
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Rahul</h6>
            <p>Created: 3 hours ago</p>
            <p>Title: testing</p>
            <p>Status: open</p>
          </div>
          <Button variant="primary">Follow</Button>
        </Card.Header>

        <Card.Text>
          <div className="mt-3 mb-3">test</div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Header className="d-flex justify-content-between">
                <p>0 Votes</p>
                <p>Poll Ends in 9 days</p>
              </Card.Header>
              <Card.Text className="d-flex flex-column">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="option1"
                    name="options"
                    value="op1"
                  />
                  <label className="form-check-label" htmlFor="option1">
                    op1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="option2"
                    name="options"
                    value="op2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    op2
                  </label>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <i className="bi bi-heart"></i> like
          </p>
          <p>
            <i className="bi bi-chat-quote-fill"></i> Comments
          </p>
          <p>
            <i className="bi bi-share"></i> Share
          </p>
        </Card.Footer>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Sanjay</h6>
            <p>Created: 3 hours ago</p>
            <p>Title: testing</p>
            <p>Status: open</p>
          </div>
          <Button variant="primary">Follow</Button>
        </Card.Header>

        <Card.Text>
          <div className="mt-3 mb-3">test</div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Header className="d-flex justify-content-between">
                <p>0 Votes</p>
                <p>Poll Ends in 9 days</p>
              </Card.Header>
              <Card.Text className="d-flex flex-column">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="option1"
                    name="options"
                    value="op1"
                  />
                  <label className="form-check-label" htmlFor="option1">
                    op1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="option2"
                    name="options"
                    value="op2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    op2
                  </label>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <i className="bi bi-heart"></i> like
          </p>
          <p>
            <i className="bi bi-chat-quote-fill"></i> Comments
          </p>
          <p>
            <i className="bi bi-share"></i> Share
          </p>
        </Card.Footer>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Monkey D luffy</h6>
            <p>Created: 3 hours ago</p>
            <p>Title: testing</p>
            <p>Status: open</p>
          </div>
          <Button variant="primary">Follow</Button>
        </Card.Header>

        <Card.Text>
          <div className="mt-3 mb-3">test</div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Header className="d-flex justify-content-between">
                <p>0 Votes</p>
                <p>Poll Ends in 9 days</p>
              </Card.Header>
              <Card.Text className="d-flex flex-column">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="option1"
                    name="options"
                    value="op1"
                  />
                  <label className="form-check-label" htmlFor="option1">
                    op1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="option2"
                    name="options"
                    value="op2"
                  />
                  <label className="form-check-label" htmlFor="option2">
                    op2
                  </label>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <i className="bi bi-heart"></i> like
          </p>
          <p>
            <i className="bi bi-chat-quote-fill"></i> Comments
          </p>
          <p>
            <i className="bi bi-share"></i> Share
          </p>
        </Card.Footer>
      </Card.Body>
    </Card>  */}



{/*THIS IS THE FINAL CODE FOR ADD POLE PAGE */}

 
            {/* <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <Card.Header style={{textAlign:"center"}}> Create Your Polls here!</Card.Header>
      <Form>
        <Form.Group controlId="pollTitle" className="mb-3">
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group controlId="pollQuestion" className="mb-3">
          <Form.Control as="textarea" rows={2} placeholder="Question" />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="option1" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-list"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Option 1" />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="option2" className="mb-3">
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-list"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Option 2" />
              </InputGroup>
            </Form.Group>

            <Button variant="success" className="mb-3">
              Add Option
            </Button>
          </Col>

          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Tips On Better Polls</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Suggest short clear options</li>
                    <li>The more options, the better</li>
                    <li>Choose the poll duration</li>
                    <li>Options can't be edited after post creation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="votingPeriod">
              <Form.Label>Voting Period</Form.Label>
              <Form.Control type="date" placeholder="dd-mm-yyyy" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="categorySelect" className="mb-3">
          <Form.Label>Select Category:</Form.Label>
          <Form.Select>
            <option>Sample</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Politics</option>
            <option>Sports</option>
            <option>Research</option>
           
          </Form.Select>
        </Form.Group>

        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="primary">Post</Button>
      </Form>
    </Card> 
 */}





{/*THIS IS THE FINAL CODE FOR POLE RESULTS PAGE */}


            {/* <Card className="m-3">
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Rahul</h6>
            <p>Created: 1 month ago</p>
            <p>Title: undefined</p>
            <p>Status: closed</p>
          </div>
          <Button variant="secondary">Follow</Button>
        </Card.Header>

        <Card.Text className="mt-3 mb-3">question q1</Card.Text>

        <Button variant="secondary" className="mb-3">
          Sample
        </Button>

        <Card className="mb-3">
          <Card.Body>
            <Card.Header className="d-flex justify-content-between">
              <p>4 votes</p>
              <p>Poll Ended!</p>
            </Card.Header>
            <Card.Text>
              <div className="mb-2">
                <ProgressBar now={80} label="4 %" variant="info" />
              </div>
              <div className="mb-2">
                <ProgressBar now={0} label="0 shjsks" variant="secondary" />
              </div>
              <div className="mb-2">
                <ProgressBar now={0} label="0 hsjsj" variant="secondary" />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <i className="bi bi-heart"></i> 1 Likes
          </p>
          <Button variant="primary">Comments</Button>
        </Card.Footer>
      </Card.Body>
    </Card>  */}





          </nav>

          {/* Add more polls here */}
        </main>

        <aside className="trending-polls">
          <h4>TRENDING POLLS</h4>
          <hr />

          <nav>
            {/* Add more trending polls here */}
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: Who will win IPL 2025 Trophy ?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 40
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 200
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header> Question: Job or Bussiness?</Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 140
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 148
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: Why do we need Polling Booth ?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 234
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 134
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: Why do we need Polling Booth ?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 234
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 134
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header> Question: choose between these ?</Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 34
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 14
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: How's the climate in Coimbatore ?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 294
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 134
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: What is the reason for recession?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 24
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 14
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header> Question: How to be self Motivated ?</Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 294
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 1304
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: Why do we need Polling Booth ?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 234
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 134
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header>
                  {" "}
                  Question: Why do we need Polling Booth ?
                </Card.Header>
                <Card.Text>
                  <p>
                    {" "}
                    <i class="bi bi-check2-circle"></i>Total Votes : 234
                  </p>
                  <hr />
                  <p>
                    <i class="bi bi-heart-fill"></i> Total Likes: 134
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </nav>
        </aside>
        
      </div>
    </div>
  );
}

export default Homepage;
