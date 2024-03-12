/*
Highlight a button and know when it's been clicked
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonBotton : MonoBehaviour
{
    Color originalColor;

    public void Highlight(){
        StartCoroutine(ChangeColor());
    }
    // Start is called before the first frame update
    void Start()
    {
        originalColor = GetComponent<Image>().color;
    }

    IEnumerator ChangeColor(){
        GetComponent<Image>().color = Color.white;
        yield return new WaitForSeconds(0.5f);
        GetComponent<Image>().color = originalColor;
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
