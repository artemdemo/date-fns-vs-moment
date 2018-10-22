let defaultTime;

export const __setDefaultTime = time => defaultTime = time;

function MomentMock(time = defaultTime) {
    if (this instanceof MomentMock) {
        this._time = time;
    } else {
        return new MomentMock(time);
    }
    this._time = time;

    this.format = format => `${this._time} [${format}]`;

    this.utc = MomentMock;
}

MomentMock.utc = MomentMock;

MomentMock.isMoment = () => true;

export default MomentMock;
