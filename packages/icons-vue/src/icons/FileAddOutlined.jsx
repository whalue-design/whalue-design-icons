// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileAddOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileAddOutlined';

export default {
  name: 'IconFileAddOutlined',
  displayName: 'FileAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileAddOutlinedSvg } },
      children,
    ),
};