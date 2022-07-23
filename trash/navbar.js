export default function Navbar() {
    return (
        <header class="p-3 mb-3 border-bottom">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a class="navbar-brand me-auto text-dark" href="/">
                    <span class="ls-logo">WHULambda</span>
                </a>

                <a class="btn btn-secondary me-4" aria-current="page" href="/tools">工具</a>
                <a class="btn btn-danger me-4" aria-current="page" href="/courses/create">投稿</a>
                <a class="btn btn-primary me-4" aria-current="page" href="/admin">后台</a>

                <div class="dropdown text-end">
                    <a href="#" class="d-block link-dark text-decoration-none me-4" id="dropdownUser1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img src="{{User.Avatar}}" alt="mdo" width="32" height="32" class="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu text-small mt-2" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="/user/{{User.ID}}">我的主页</a></li>
                        <li><a class="dropdown-item" href="/user/resume">我的简历</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="/logout">退出登录</a></li>
                    </ul>
                </div>

                <a class="btn btn-outline-secondary me-2" aria-current="page" href="/login">登录/注册</a>
            </div>
        </header>
    )
} 
