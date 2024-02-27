
/*
Keep track of scores and ball status

21/02/2024
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public GameObject dotPrefab;
    public GameObject dot;
    public float force;

    public int pointsLeft = 0;
    public int pointsRight = 0;
    // Start is called before the first frame update
    void Start()
    {
        StartGame();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.R)){
            Destroy(dot);
            StartGame();
        }
    }

    void StartGame()
    {
        dot = Instantiate(dotPrefab);
        //Vector3 direction = new Vector3(Random.value) hay una manera de hacer esto más locos
        dot.GetComponent<Rigidbody2D>().velocity = Random.onUnitSphere * force;
    }

    public void AddPoints(int side)
    {
        if(side == 1){
            pointsLeft++;
        } else {
            pointsRight++;
        }
        Destroy(dot);
        StartGame();
    }
}
