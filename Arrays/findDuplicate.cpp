#include <bits/stdc++.h>
using namespace std;
// Question : Given an array of (n+1) size  , all the elements in the arrays must be in the range of [1,n] both inclusive and we need to return the duplicate element in the array
/*
Method 1 : sort and count
Method 2 : store and count
Method 3 : Negative index method and checking
Method 4 : swap and location method 
*/

int solve3(int*arr , int n ){
    while (arr[0] != arr[arr[0]]){
        swap(arr[0], arr[arr[0]]);
    }
    return arr[0];
}
int solve2(int *arr, int n)
{

    for (int i = 0; i < n; i++)
    {
        int index = abs(arr[i]);

        if (arr[index] < 0)
        {
            // negative value is there means this is already visited one
            return (index);
        }

        arr[index] *= -1; // marked in the current value as visited
    }

    return -1;
}
int solve(int *arr, int n)
{
    int N = (n - 1);
    int ans = 0;
    for (int i = 0; i < n; i++)
    {
        ans ^= (arr[i]);
    }

    for (int i = 1; i <= N; i++)
    {
        ans ^= (i);
    }

    return ans;
}
int main()
{
    int arr[] = {1, 3, 4, 2, 2};
    int n = sizeof(arr) / sizeof(int);

    cout << "The duplicate element in the array is  : " << solve(arr, n) << endl;
    cout << "The duplicate element in the array is  : " << solve2(arr, n) << endl;
    cout << "The duplicate element in the array is  : " << solve3(arr, n) << endl;

    return 0;
}