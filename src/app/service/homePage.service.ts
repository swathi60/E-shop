import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HomePageService {
    private homeurl='https://mocki.io/v1/d2ca608e-383b-4159-9785-3b7e9c89b509';
    constructor(private http:HttpClient){}
    getHomePageData():(Observable<any>){
        return this.http.get<any>(this.homeurl);
    }
}