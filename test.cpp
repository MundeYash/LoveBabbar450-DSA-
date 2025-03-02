#include <iostream>
#include <vector>
using namespace std ;

long long sumOfPrimesInRange(int start, int end) {
    if (end < 2) {
        return 0; // There are no prime numbers less than 2
    }

    vector<bool> isPrime(end + 1, true);
    isPrime[0] = isPrime[1] = false;

    for (int i = 2; i * i <= end; ++i) {
        if (isPrime[i]) {
            for (int j = i * i; j <= end; j += i) {
                isPrime[j] = false;
            }
        }
    }

    long long sum = 0;
    for (int i = std::max(start, 2); i <= end; ++i) {
        if (isPrime[i]) {
            sum += i;
        }
    }
    return sum;
}

int main() {
    int start, end;
  
    cin >> start;

    cin >> end;

    long long sum = sumOfPrimesInRange(start, end);
    cout << sum << std::endl;

    return 0;
}
