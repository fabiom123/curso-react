import React from 'react';
import CourseCard from '../molecules/CourseCard'
import withLoader from '../HOC/withLoader';

const CourseGrid = ({ courses }) =>(
    <div className="ed-grid m-grid-4">
        { 
            courses.map((c => 
                <CourseCard 
                key = {c.id}
                id = {c.id}
                title = {c.title}
                image = {c.image}
                prince = {c.price}
                nom_prof = {c.profesor}
                img_prof = {c.img_prof} 
            /> ))
        }
    </div>
)
export default withLoader("courses")(CourseGrid);