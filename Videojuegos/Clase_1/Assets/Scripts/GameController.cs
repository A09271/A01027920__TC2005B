
/*
Keep track of scores and ball status

21/02/2024
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class GameController : MonoBehaviour
{
    public GameObject dotPrefab;
    public GameObject dot;
    public float force;

    public int pointsLeft = 0;
    public int pointsRight = 0;

    public TMP_Text leftScore;
    public TMP_Text rightScore;

    public int maxPoints;
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
    public void Reset(){
        Destroy(dot);
        dot = Instantiate(dotPrefab);
        //Vector3 direction = new Vector3(Random.value) hay una manera de hacer esto más locos
        dot.GetComponent<Rigidbody2D>().velocity = Random.onUnitSphere * force;
    }

    void StartGame()
    {
        pointsLeft = 0;
        pointsRight = 0;
        leftScore.text = pointsLeft.ToString();
        rightScore.text = pointsRight.ToString();
        Reset();
    }

    public void AddPoints(int side)
    {
        if(side == 1){
            pointsLeft++;
            if (pointsLeft >= maxPoints){
                //UnityEngine.SceneManagement.SceneManager.LoadScene("Victory"); para llevarte a otra escena
                rightScore.text = "Winner!" + pointsRight.ToString();
            }
            leftScore.text = pointsLeft.ToString();
        } else {
            pointsRight++;
            rightScore.text = pointsRight.ToString();
        }
        Destroy(dot);
        StartGame();
    }
}
