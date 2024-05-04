export function ErrorFormat(error:any) {
    //remove word "GraphQL error: "
    let errorString = error.message.replace('Apollo error: ', '');
    return errorString;
}