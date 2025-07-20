#include <iostream>
#include <vector>
using namespace std;
// Reverse the array
void reverseArray2(vector<int> &arr, int n)
{
    // optimised approach
    // time : O(n), space : O(1)
    // concept : two pointer approach

    int s = 0, e = n - 1;
    while (s <= e)
    {
        swap(arr[s], arr[e]);
        s++;
        e--;
    }

    cout << "This is optimised approach for reversing the array " << endl;
    return;
}

// brute force approach
void reverseArray1(vector<int> arr, int n)
{
    // time : O(n) ,space : O(n)
    // concept : store the elements of array in another array in reverse order

    vector<int> ans;

    // step1 : store elements in reverse order in ans array
    for (int i = n - 1; i >= 0; i--)
    {
        ans.push_back(arr[i]);
    }
    // step2 : copy the elements of ans array to orginal array
    for (int i = 0; i < n; i++)
    {
        arr[i] = ans[i];
    }
    cout << "This is brute force approach for reversing the array " << endl;
    return;
}
void printAray(vector<int> arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main()
{
    vector<int> arr = {2, 3, 1, 3, 44, 90, 100};
    int n = arr.size();
    printAray(arr, n);
    reverseArray2(arr, n);
    printAray(arr, n);
    reverseArray1(arr, n);
    printAray(arr, n);

    return 0;
}