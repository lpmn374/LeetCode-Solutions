class Solution {
    public String removeOuterParentheses(String s) {
        int balance=0;
        String result="";
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            if(c=='('){
                balance++;
                if(balance>1) result+=c;
            }
            else{
                balance--;
                if(balance>0) result+=c;
            }
        }
        return result;
    }
}