import React, {useState, useEffect} from 'react';import Axios from 'axios';
import { ListGroup, ListGroupItem  } from 'reactstrap';

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchRepos = async () => {
        const { data } = await Axios.get(repos_url);
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, [fetchRepos, repos_url])

//Taking reference from https://api.github.com/users/RakshitGupta621/repos

    return(
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key = {repo.id}>
                    <div className  = "text-primary">{repo.name}</div>
                    <div className  = "text-secondary">{repo.language}</div>
                    <div className  = "text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repos;