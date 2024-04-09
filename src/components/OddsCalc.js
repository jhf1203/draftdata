import { React, useState }  from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import ztable from "ztable";


function OddsCalc(props) {

console.log(props)

const [odds, setOdds] = useState("")

let indexFirst = `draft${props.number}`
let indexSecond = `position${props.number}`

let positions = ["QB", "RB", "WR", "TE", "T", "G", "C", "DE", "DT", "OLB", "ILB", "CB", "S", "P", "K"]

console.log(indexFirst)
let chosenPos

function calcOdds(e) {
    e.preventDefault()
    let idToTgtDraft = document.getElementById(indexFirst)
    let idToTgtPos=document.getElementById(indexSecond)
    props.data.map((data) => {
        
        // console.log(data.position)
        // console.log(idToTgtPos.value)
        if (idToTgtPos.value == data.position) {
            let posChosen = data.position
            console.log(posChosen)
            // console.log(idToTgtDraft.value)
            // let draftVal = idToTgtDraft.value
            console.log(idToTgtDraft.value)
            console.log("avg: ", data.avg)
            let zScore = (idToTgtDraft.value - data.avg) / data.stDev
            // console.log(zScore.toFixed(2))
            let pbOdds = 1- (ztable(zScore.toFixed(2))).toFixed(2)
            console.log(pbOdds.toFixed(2))
            setOdds((pbOdds.toFixed(2))*100)

        }

    })
    


}


    return(
        <Row>
            <Form>
                <Row>
                <Col md="3">
                    <Form.Control id={indexFirst} placeholder="Draft#">
                    </Form.Control>
                </Col>
                <Col md="3">
                    <Form.Select id={indexSecond}>
                        {positions.map((pos) => {
                            return(
                                <option value={pos}>{pos}</option>
                            )
                            }

                        )}
                    </Form.Select>
                </Col>
                <Col md="3">
                    <p>{odds}%</p>
                </Col>
                <Col md="3">
                    <Button type="submit" onClick={calcOdds}>
                        Calc.
                    </Button>
                </Col>
                </Row>
            </Form>
        </Row>
    )
}

export default OddsCalc