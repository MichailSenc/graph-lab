const DrawCirusBec = () =>
{
    const egesPoints = () => {
        return [[333,200], [333,400], [666,400],[666,200]];
    }

    const getNormal = ([x1,y1],[x2,y2]) => {
        return [y2-y1, x1 - x2];
    }

    const scalar = ([x1,y1], [x2,y2]) => {
        return x1*y2 - y1*x2 
    }

    let dir = seg.Direction;
    let tA = 0.0;
    let tB = 1.0;
    let edges = GetEdges();
    egesPoints.foreach(edge => 
    {
        switch (Math.sign(edge.Normal.ScalarMul(dir)))
        {
            case -1:
                {
                    var t = seg.IntersectionParameter(edge);
                    if (t > tA)
                    {
                        tA = t;
                    }
                    break;
                }
            case +1:
                {
                    var t = seg.IntersectionParameter(edge);
                    if (t < tB)
                    {
                        tB = t;
                    }
                    break;
                }
            case 0:
                {
                    if (!edge.OnLeft(seg.A))
                    {
                        return;
                    }
                    break;
                }
        }
    })
    if (tA > tB)
    {
        return;
    }
    seg = seg.Morph(tA, tB);

    LineWithIntCords.Draw(g, new Point((int)Math.Round(seg.A.X), (int)Math.Round(seg.A.Y)), new Point((int)Math.Round(seg.B.X), (int)Math.Round(seg.B.Y)));
}