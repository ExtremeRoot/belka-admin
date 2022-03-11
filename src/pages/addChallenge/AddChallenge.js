import {useRef, useState} from 'react';
import { useQuery, useMutation } from 'react-query';
import { Editor } from '@tinymce/tinymce-react';
import Wrapper from "../../components/wrapper/Wrapper";
import { getAllCategories } from '../../api/category';
import { createChallenge } from '../../api/challenge';


const AddChallenge = () => {
    const [challenge, setChallenge] = useState({
        name: "",
        category: "",
        question: "",
        score: "",
        photo: ""
    })
    // get all Categories
    const { isLoading, data } = useQuery('categories', getAllCategories);
    const categories = data?.data;
    const descriptionRef = useRef(null);

    // Adding a probelm in database
    const { isLoading: createLoading, mutateAsync: createChallengeFunc } = useMutation('create-challenge', createChallenge, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error.response.data);
        }
    })

    // submittin the form
    const createChallengeSubmit = async (e) => {
        e.preventDefault();
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI1MDAxYjQ3OWJkZmQ4NzQzMWZmODUiLCJlbWFpbCI6ImFiZHVsbGFoQGdtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTY0NjY2ODMzMywiZXhwIjoxNjQ3MjczMTMzfQ.ZrPGlOMyY6KD2TzWSqsvEZ5bSI5YLB5UcyPYQZdsuX4';

        if(descriptionRef.current) {
            const description = descriptionRef.current.getContent();

            // create form data
            const formData = new FormData();
            formData.append('name', challenge.name);
            formData.append('category', challenge.category);
            formData.append('question', challenge.question);
            formData.append('score', challenge.score);
            formData.append('problemtype', challenge.problemtype);
            formData.append('photo', challenge.photo);
            formData.append('description', description);

            // create challenge
            await createChallengeFunc({challenge: formData, token});

        }

    }


    return (
        <Wrapper title={'Add Challenge | Belkasoft'}>
            <div className="container">
                <h2>Add a Challenge</h2>
                <div className="card mt-5 p-5">
                    <form onSubmit={createChallengeSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="">Name</label>
                            <input type="text" value={challenge.name} onChange={(e) => setChallenge({name: e.target.value})} className="form-control shadow-none" />    
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="">Category</label>
                            <select onChange={(e) => setChallenge({...challenge, category: e.target.value})} className='form-control'>
                                {
                                    categories?.map((category, key) => (
                                        <option key={key} value={category?._id} defaultChecked>{category?.name}</option>
                                    ))
                                }   
                            </select>    
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="">question</label>
                            <input onChange={(e) => setChallenge({...challenge, question: e.target.value})} type="text" className="form-control shadow-none" />    
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="">Score</label>
                            <input onChange={(e) => setChallenge({...challenge, score: e.target.value})} type="number" className="form-control shadow-none" />    
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="formFile" className="form-label">Challenge Image</label>
                            <input onChange={(e) => setChallenge({...challenge, photo: e.target.files[0]})} className="form-control shadow-none" type="file" id="formFile" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="description">Challenge Description</label>
                            <Editor 
                                apiKey='zx9qjz9qf0gjnq103237dl4yq062dcl966d4af5ktfttloa1'
                                onInit={(evt, editor) => descriptionRef.current = editor}
                                init={{
                                    height: 400
                                }}
                            />
                        </div>

                        <button className='btn btn-success shadow-none' type="submit">Create problem</button>

                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default AddChallenge;