from timeit import default_timer as timer
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# arr = [14,3,2,20,1,3,4,7,2,9,10]

@app.route('/mergesort', methods=['POST'])
def get_mergesort():
    arr = request.get_json()
    print(arr)
    tic = timer()
    merge_sort(arr)
    toc = timer()
    timeElapsed = "{:.12f}".format(toc-tic)
    return jsonify(arr, timeElapsed), 201

def merge_sort(arr):
    if len(arr)>1:
        m = len(arr)//2
        L = arr[:m]
        R = arr[m:]

        merge_sort(L)
        merge_sort(R)

        i=j=k=0
        while i<len(L) and j<len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i+=1
            else:
                arr[k]=R[j]
                j+=1
            k+=1
        while i<len(L):
            arr[k]=L[i]
            i+=1
            k+=1
        while j<len(R):
            arr[k]=R[j]
            j+=1
            k+=1   

