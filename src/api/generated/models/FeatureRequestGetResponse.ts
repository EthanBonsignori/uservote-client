/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Comment } from './Comment';
export type FeatureRequestGetResponse = {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    content: string;
    votes: number;
    category?: Category;
    author_username: string;
    comments?: Array<Comment>;
};

