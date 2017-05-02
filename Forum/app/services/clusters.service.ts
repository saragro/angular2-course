import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Cluster } from "../models/cluster.model"

@Injectable()
export class ClustersService{

    private clustersAPIUrl = 'app/assets/clusters-list.json';
    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) {

    }

    getClusters(): Observable<Cluster[]> {
        //return (this.http.get(this.clustersAPIUrl)
        //    .map((res: Response) => <Cluster[]>res.json()));
        return this.http.get(this.clustersAPIUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //getMovie(id): Observable<Movie> {
    //    let url = `${this.moviesAPIUrl}/${id}`;
    //    return this.http.get(url)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}

    //saveMovie(movie): Observable<Movie> {
    //    let url = `${this.moviesAPIUrl}/${movie.id}`;
    //    return this.http.put(url, JSON.stringify(movie), { headers: this.headers })
    //        .map(response => { return movie })
    //        .catch(this.handleError);
    //}

    //create(movie: Movie): Observable<Movie> {
    //    return this.http.post(this.moviesAPIUrl, JSON.stringify(movie))
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}
    //search(term: string): Observable<Movie[]> {
    //    console.log(term);
    //    let url = `${this.moviesAPIUrl}/?title=${term}`;
    //    return this.http.get(url)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}
    private extractData(response: Response): any {
        let res = response.json();
        return res;
        //return res.data || [];
    }

    private handleError(error: any) {

        let msg = error.message ? error.message : 'Unknown Error';
        console.error(msg);
        return Observable.throw(msg);

    }

}
