#include <iostream> 
/*Incomplete*/

using namespace std; 

struct Node { 
    int data;
    Node* left;
    Node* right; 
};

Node* createNode(int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->left =newNode->right =nullptr;

    return newNode;
}


int man() {

    Node* root=createNode(1);

    root->left= createNode(2);
    root->right= createNode(3);

    cin.get();

}