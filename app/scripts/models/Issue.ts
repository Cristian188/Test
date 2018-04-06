module issuesApp.Models {
    export class Issue {
        name: string;
        html_url: string;
        comments: number;
        comments_url: string;

        constructor() { }
    }
}