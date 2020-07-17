// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GithubOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GithubOutlined';

export default {
  name: 'IconGithubOutlined',
  displayName: 'GithubOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GithubOutlinedSvg } },
      children,
    ),
};