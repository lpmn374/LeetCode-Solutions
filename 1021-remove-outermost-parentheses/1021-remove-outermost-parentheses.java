class Solution {
    public String removeOuterParentheses(String s) {
        int balance=0;
        String result="";
        for(int i=0;i<s.length();i++)
            if(s.charAt(i)=='('){
                balance++;
                if(balance>1) result+=s.charAt(i);
            }
            else{
                balance--;
                if(balance>0) result+=s.charAt(i);
            }
        return result;
    }
}