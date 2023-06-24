#include<stdio.h>
void main(){
    int row;
    printf("Enter the rows\n");
    scanf("%d",&row);
    for(int i=0;i<row;i++){
        for (int j = 0; j < i; j++)
        {
            printf("*");
        }
        
        printf("\n");
    }
}