import Part from './Part.js'
import Sum from './Sum.js'

export const Course = (props) => {

    return <div>
        <h1>{props.course.name}</h1>
        <Part key={props.course.id} parts={props.course.parts}></Part>
        <Sum parts ={props.course.parts}></Sum>
    </div>
}

export const Courses = (props) => {

    return <div>

           
                {props.courses.map(course =>(
                    <span key={course.id}>                       
                        <Course course={course}></Course>
                    </span>
                ))}
            
    </div>
}
 